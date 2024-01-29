// dashboard/data

import { useState, useEffect } from 'react';

const SalesTableData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const token = sessionStorage.getItem('token');
        console.log('Token retrieved:', token);

        const cleanedToken = token ? token.replace(/"/g, '') : '';
        console.log('Cleaned token:', cleanedToken);

        const response = await fetch('https://0801241705-production.up.railway.app/stat/annonce-par-categorie', {
          headers: {
            'Authorization': `Bearer ${cleanedToken}`,
          },
        });

        console.log('Response:', response);

        if (response.ok) {
          const result = await response.json();
          console.log('Data fetched successfully:', result);
          setData(result);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default SalesTableData;
