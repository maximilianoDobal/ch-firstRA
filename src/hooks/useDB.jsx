import React, { useEffect, useState } from "react";
import { getFirestore } from "../firebase";

const useDB = (coleccion, doc) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const db = getFirestore();
  const collection = db.collection(coleccion);

  useEffect(() => {
    setIsLoading(true);
    const getDataFromFirestore = async () => {
      try {
        if (!doc) {
          const response = await collection.get();
          if (response.empty) console.log("No hay productos");
          setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } else {
          const documento = collection.doc(doc);
          documento.get().then((res) => setData({ ...res.data(), id: res.id }));
        }
      } catch (err) {
        setErrors(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDataFromFirestore();
  }, [coleccion, doc]);

  return { data, isLoading, errors };
};

export default useDB;
