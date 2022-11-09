// ** Icons Import
import {Circle} from 'react-feather'
// import{ ReactComponent as Maps }  from './assets/images/icons/maps.svg';

export default [
  
  {
    id: 'maps',
    title: 'תצוגת מפות',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/9.svg" width={25} ></img>,
    navLink: '/page-layout/layout-empty'
  },

  {
    id: 'current',
    title: 'מצב קיים',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/2.svg" width={25}/>,
    children: [
      {
        id: 'bulding',
        title: 'מבנים',
        icon: <Circle size={12} />,
        navLink: '/cards/basic'
      }  
    ]
  },

  {
    id: 'allowed',
    title: 'היתרים',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/3.svg" width="25"/>,
    navLink: '/datatables/basic'
  },
  {
    id: 'descions',
    title: 'החלטות שמאי מכריע',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/4.svg" width="25" />,
    navLink: '/page-layout/layout-empty'
  },
  {
    id: 'arrar',
    title: 'נתוני עררים',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/5.svg" width="25"/>,
    navLink: '/page-layout/layout-empty'
  },
  {
    id: 'nadlan',
    title: 'נתוני עסקאות נדל"ן ותובנות',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/6.svg" width="25" />,
    navLink: '/page-layout/layout-empty'
  },
  
  {
    id: 'plans',
    title: 'תוכניות ומדיניות התחדשות עירונית',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/8.svg" width="25" />,
    children: [
      {
        id: 'plan4',
        title: 'תוכנית רובע 4',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      },
      {
        id: 'namir',
        title: 'תכנית רחוב נמיר ברובע 4',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      },
      {
        id:'tama',
        title:'מדיניות תמ"א 38- 9086',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      }
    ]
  },
  {
    id: 'rakal',
    title: 'מדיניות רק"ל ומתע"ן',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/11.svg" width="25" />,
    navLink: '/page-layout/layout-empty'
  },
  {
    id: 'allplans',
    title: 'תוכניות מתאר כוללניות',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/9.svg" width="25" />,
    children: [
      {
        id: 'TA5000',
        title: 'תכנית מתאר- תא/5000',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      }
    ]
  },
  {
    id: 'DataPage',
    title: 'דף מידע עירוני',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/12.svg" width="25" />,
    children: [
      {
        id: 'buldingRights',
        title: 'זכויות בנייה ע"פ מידע עירוני',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      },
      {
        id: 'partsPlan',
        title: 'תכניות החלות על חלקה',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      }
    ]
  },
  {
    id: 'AreaPlan',
    title: 'תוכניות באזור',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/13.svg" width="25"/>,
    navLink: '/page-layout/layout-empty'
  },
  {
    id: 'IntrestPoint',
    title: 'נקודות עניין ומידע סביבתי',
    // icon: <img src="https://app.snap.land/NewDesign/vectors/14.svg" width="25" />,
    children: [
      {
        id: 'DistancePoint',
        title: 'מרחק מנקודות עניין',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      },
      {
        id: 'EnvInfo',
        title: 'מידע סביבתי',
        icon: <Circle size={12} />,
        navLink: '/page-layout/layout-empty'
      }
    ]
  }
]
