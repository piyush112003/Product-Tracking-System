// Import the Supabase client
const { createClient } = require('@supabase/supabase-js');

// Replace with your Supabase API URL and API Key
const supabaseUrl = 'https://otebenygjltlzfggfcqs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZWJlbnlnamx0bHpmZ2dmY3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2Mjk1ODAsImV4cCI6MjAxODIwNTU4MH0._TqFX7AOkpoj4Pvj7t2SQe2VyeboZBUgqaD0go80BZQ';

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Query data from a table
async function fetchData() {
  const { data, error } = await supabase.from('Product_Table').select('*');
  if (error) {
    console.error(error.message);
  } else {
    console.log('Fetched data:', data);
  }
}

// Example: Insert data into a table
async function insertData() {
  const { data, error } = await supabase.from('Product_Table').insert([{ product_id: 'Apple Macbook', updated_by: 'Shark', section_no: 5, days_in_factory: 3,exited:false}]).select();
  if (error) {
    console.error(error.message);
  } else {
    console.log('Inserted data:', data);
  }
}

const checkConnection = async () => {
    try {
     
    let { data: Product_Table, error } = await supabase
    .from('Product_Table')
    .select('*')
        
      if (error) {
        console.error('Error connecting to Supabase:', error.message);
      } else {
        console.log('Connected to Supabase. \nData:', Product_Table);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

// Call your functions or perform other actions as needed
fetchData();
insertData();

checkConnection();
