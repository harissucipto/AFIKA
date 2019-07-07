export const nameSurahCard = surah => {
  const { number, name_latin } = surah;
  return `${number} ${' '} ${name_latin}`;
};

export const surahBelumDihapal = (surah, hapalanSurahs) =>
  hapalanSurahs.findIndex(
    hapalanSurah => hapalanSurah.number === surah.number
  ) < 0;

export const filterSurahBelumDihapal = hapalanSurahs => surah =>
  surahBelumDihapal(surah, hapalanSurahs);

export const filterNamaSurah = query => surah =>
  surah.name_latin.toLowerCase().includes(query.toLowerCase());

export const cariSurah = (surahs, query) =>
  query.length ? surahs.filter(filterNamaSurah(query)) : surahs;
