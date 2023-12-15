// Import the Supabase client
const { createClient } = require('@supabase/supabase-js');

// Replace with your Supabase API URL and API Key
const supabaseUrl = 'https://otebenygjltlzfggfcqs.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Query data from a table
async function fetchData() {
  const { data, error } = await supabase.from('your_table_name').select('*');
  if (error) {
    console.error(error.message);
  } else {
    console.log('Fetched data:', data);
  }
}

// Example: Insert data into a table
async function insertData() {
  const { data, error } = await supabase.from('your_table_name').insert([{ column1: 'value1', column2: 'value2' }]);
  if (error) {
    console.error(error.message);
  } else {
    console.log('Inserted data:', data);
  }
}

// Call your functions or perform other actions as needed
fetchData();
insertData();
