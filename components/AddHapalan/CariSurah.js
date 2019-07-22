import React from 'react';
import { SearchBar } from 'antd-mobile-rn';
import { secondary, white } from '../Theme/Color';

const CariSurah = ({ hapusQuery, setQuery, query }) => (
  <>
    <SearchBar
      style={{ backgroundColor: secondary, color: white, marginRight: 20 }}
      value={query}
      placeholder="Masukan Nama Surah"
      onSubmit={setQuery}
      onCancel={hapusQuery}
      onChange={setQuery}
      cancelText="Hapus"
    />
  </>
);

export default CariSurah;
