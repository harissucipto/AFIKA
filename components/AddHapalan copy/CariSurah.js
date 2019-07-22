import React from 'react';
import { SearchBar } from 'antd-mobile-rn';

const CariSurah = ({ hapusQuery, setQuery, query }) => (
  <>
    <SearchBar
      value={query}
      placeholder="Masukan Nama Surah"
      onSubmit={setQuery}
      onCancel={hapusQuery}
      onChange={setQuery}
      showCancelButton
      cancelText="Hapus"
    />
  </>
);

export default CariSurah;
