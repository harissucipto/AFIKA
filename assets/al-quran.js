import a114 from '../assets/al-quran/114.json';
import a113 from '../assets/al-quran/113.json';
import a112 from '../assets/al-quran/112.json';
import a111 from '../assets/al-quran/111.json';
import a110 from '../assets/al-quran/110.json';
import a109 from '../assets/al-quran/109.json';
import a108 from '../assets/al-quran/108.json';
import a107 from '../assets/al-quran/107.json';
import a106 from '../assets/al-quran/106.json';
import a105 from '../assets/al-quran/105.json';

const alQuran = [a114, a113, a112, a111, a110, a109, a108, a107, a106, a105];
const data = alQuran.map(item => {
  const key = Object.keys(item)[0];
  return item[key];
});

export default data;
