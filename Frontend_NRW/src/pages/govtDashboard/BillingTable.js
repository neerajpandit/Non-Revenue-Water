import React, { useState } from 'react';
import './css/Crud.css';

const initialData = [
  { id: 1, consumerNo: '12345', consumerName: 'John Doe', monthlyDue: 50, totalDue: 200 },
  { id: 2, consumerNo: '54321', consumerName: 'Jane Doe', monthlyDue: 30, totalDue: 120 },
  // Add more initial data if needed
];

const BillingTable = () => {
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({ consumerNo: '', consumerName: '', monthlyDue: '', totalDue: '' });
  const [isEditItem, setIsEditItem] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (isEditItem !== null) {
      // Edit existing item
      const editedData = data.map((item) =>
        item.id === isEditItem ? { ...item, ...formData } : item
      );
      setData(editedData);
      setFormData({ consumerNo: '', consumerName: '', monthlyDue: '', totalDue: '' });
      setIsEditItem(null);
    } else {
      // Add new item
      setData([...data, { id: data.length + 1, ...formData }]);
      setFormData({ consumerNo: '', consumerName: '', monthlyDue: '', totalDue: '' });
    }
  };

  const handleEdit = (id) => {
    const selectedData = data.find((item) => item.id === id);
    setFormData(selectedData);
    setIsEditItem(id);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className="crud">
      {/* <h1>Consumer Data Table</h1> */}
      <div className="create-section">
        <div>
        <label>Consumer No.:</label>
        <input
          type="text"
          name="consumerNo"
          value={formData.consumerNo}
          onChange={handleInputChange}
        />
        </div>
        <div>
        <label>Consumer Name:</label>
        <input
          type="text"
          name="consumerName"
          value={formData.consumerName}
          onChange={handleInputChange}
        />
        </div>
       <div>
       <label>Monthly Due:</label>
        <input
          type="text"
          name="monthlyDue"
          value={formData.monthlyDue}
          onChange={handleInputChange}
        />
       </div>
        <div>
        <label>Total Due:</label>
        <input
          type="text"
          name="totalDue"
          value={formData.totalDue}
          onChange={handleInputChange}
        />
        </div>
        <button onClick={handleAdd}>{isEditItem !== null ? 'Update' : 'Add'}</button>
      </div>
      <div className='table-box'>
      <table>
        <thead>
          <tr>
            <th>Consumer No.</th>
            <th>Consumer Name</th>
            <th>Monthly Due</th>
            <th>Total Due</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.consumerNo}</td>
              <td>{item.consumerName}</td>
              <td>{item.monthlyDue}</td>
              <td>{item.totalDue}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
    </div>
  );
};

export default BillingTable;
