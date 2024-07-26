import { useState } from 'react';
import './App.css';
import KzuiCustomSelect from './components/kzuiCustomSelect/KzuiCustomSelect';

function App() {
  const [value, setValue] = useState(null);


  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 }
  ];

  const groupedOptions = [
    {
      label: 'Dhaka',
      options: [
        { label: 'Dhaka' },
        { label: 'Faridpur' },
        { label: 'Gopalganj' },
        { label: 'Madaripur' },
        { label: 'Manikganj' },
        { label: 'Munshiganj' },
        { label: 'Narayanganj' },
        { label: 'Narsingdi' },
        { label: 'Rajbari' },
        { label: 'Shariatpur' },
        { label: 'Tangail' },

      ]
    },
    {
      label: 'Chittagong',
      options: [
        { label: 'Comilla' },
        { label: 'Coxs Bazar' }
      ]
    }
  ];

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };

  const handleMenuOpen = () => {
    console.log('Menu opened');
  };

  const handleSearch = (searchTerm) => {
    console.log('Search:', searchTerm);
  };
  return (
    <div className='kzui-custom-select_main-container'>
      <h2>Custom Select Component</h2>
      <KzuiCustomSelect
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={groupedOptions}
        value={value}
        placeholder="Select Your District"
        isGrouped={true}
        isMulti={true}
        onChangeHandler={handleChange}
        onMenuOpen={handleMenuOpen}
        onSearchHandler={handleSearch}
      />
    </div>
  );
}

export default App;
