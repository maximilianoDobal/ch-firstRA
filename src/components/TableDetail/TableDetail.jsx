import React from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";

const TableDetail = ({ obj, objNames }) => {
  return (
    <>
      {Object.entries(obj).length !== 0 ? (
        <Col md={5}>
          <Table>
            <thead>
              <tr>
                <th>{obj.objName}</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(objNames).map(([fakeKey, keyName]) => (
                <tr>
                  <td>{keyName}</td>
                  <td>
                    {Object.entries(obj).map(([key, value]) => (
                      <>{key === fakeKey ? value : null}</>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      ) : null}
    </>
  );
};

export default TableDetail;
