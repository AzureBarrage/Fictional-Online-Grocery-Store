import React from 'react';
import StoreTable from '../components/StoreTable'
import ZipSearch from '../components/ZipSearch'

function StoresPage({ stores }) {
    return (
        <>
            <h2>Find your closest store!</h2>
            <p>Enter your zip code below to locate your nearest store.</p>
            <StoreTable stores={stores} />
            <ZipSearch />
        </>
    );
}

export default StoresPage;