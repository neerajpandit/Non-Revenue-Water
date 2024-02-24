
import React, { useState} from 'react';
import './css/Crud.css';

const initialData = [
  {
    id: 1,
    consumerNo: 'C001',
    consumerName: 'John Doe',
    gender: 'Male',
    fathersName: 'John Doe Sr.',
    address: '123 Main St, Cityville',
    startDate: '2023-01-01',
    endDate: '2023-01-01',
  },
  {
    id: 2,
    consumerNo: 'C002',
    consumerName: 'Jane Doe',
    gender: 'Female',
    fathersName: 'Jane Doe Sr.',
    address: '456 Oak St, Townsville',
    startDate: '2023-02-01',
    endDate: '2023-01-01',
  },
  // Add more initial data if needed
];

const Crud = () => {
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({
    consumerNo: '',
    consumerName: '',
    gender: '',
    fathersName: '',
    address: '',
    startDate: '',
    endDate: '',
  });
  const [isEditItem, setIsEditItem] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.consumerNo || !formData.consumerName || !formData.startDate) {
      alert('Please fill in the required fields.');
      return;
    }

    if (isEditItem !== null) {
      // Editing existing item
      const editedData = data.map((item) =>
        item.id === isEditItem ? { ...item, ...formData } : item
      );
      setData(editedData);
      setIsEditItem(null);
    } else {
      // Adding new item
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      const newItem = { ...formData, id: newId };
      setData([...data, newItem]);
    }

    // Clear the form data
    setFormData({
      consumerNo: '',
      consumerName: '',
      gender: '',
      fathersName: '',
      address: '',
      startDate: '',
      endDate: '',
    });
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
       <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        />
       </div>
        <div>
        <label>Father's Name:</label>
        <input
          type="text"
          name="fathersName"
          value={formData.fathersName}
          onChange={handleInputChange}
        />
        </div>
       <div>
       <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
       </div>
       <div>
       <label>Start Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
       </div>
       <div>
       <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
        />
       </div>
        <button onClick={handleAdd}>{isEditItem !== null ? 'Edit' : 'Add'}</button>
      </div>
      <div className='table-box'>
      <table>
        <thead>
          <tr>
            <th>Consumer No.</th>
            <th>Consumer Name</th>
            <th>Gender</th>
            <th>Father's Name</th>
            <th>Address</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.consumerNo}</td>
              <td>{item.consumerName}</td>
              <td>{item.gender}</td>
              <td>{item.fathersName}</td>
              <td>{item.address}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
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

export default Crud;
