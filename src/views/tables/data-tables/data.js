// ** Custom Components
// import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'

import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars

export let data
export let columns = []
// export let columns1 = []

// ** Get initial Data

axios.get('/api/datatables/initial-data').then(response => {
  data = response.data
  data = response.table2
  columns = response.data.map((element, id) => {
    return (
      {
      key: id,
      name: element.name,
      sortable: () => element.cell,
      minWidth: '100px',
      cell: () => element.cell
      }
    )
  })
  // columns1 = response.data.table2.map((element, id) => {
  //   return (
  //     {
  //     key: id,
  //     name: element.name,
  //     sortable: () => element.cell,
  //     minWidth: '100px',
  //     cell: () => element.cell
  //     }
  //   )
  // })
})

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='fw-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='fw-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Post:</span> {data.post}
      </p>
     
    </div>
  )
}
// ** Table Common Column

// export const columns = [
//   {
//     name: 'מרחק במטרים',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.distance_m
//   },
//   {
//     name: 'מספר בקשה להיתר',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.request_num
//   },
//   {
//     name: 'מספר אישור',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.permission_num
//   },
//   {
//     name: 'סיווג מקור',
//     sortable: true,
//     minWidth: '100px',  
//     cell: row => row.sivug_makor
//   },
//   {
//     name: 'סוג בקשה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.sug_bakasha
//   },
//   {
//     name: 'סטטוס',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.building_stage
//   },
//   {
//     name: 'תאריך פתיחת בקשה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.open_request
//   },
//   {
//     name: 'תאריך אישור בקשה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.permission_date
//   },
//   {
//     name: 'מסלול רישוי',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.maslul_rishuy
//   },
//   {
//     name: 'תמ\"א 38',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.sw_tama_38
//   },
//   {
//     name: 'כתובת',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.addresses
//   }

// ]

// export const columns1 = [
//   {
//     name: 'מרחק במטרים',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.distance_m
//   },
//   {
//     name: 'גוש',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.block
//   },
//   {
//     name: 'חלקה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.plot
//   },
//   {
//     name: 'סוג השומה',
//     sortable: true,
//     minWidth: '100px',  
//     cell: row => row.appraisaltype
//   },
//   {
//     name: 'גרסת השומה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.appraisalversion
//   },
//   {
//     name: 'תפקיד השמאי',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.appraisertype
//   },
//   {
//     name: 'ועדה מקומית',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.committee
//   },
//   {
//     name: 'תאריך ההכרעה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.decisiondate_unix
//   },
//   {
//     name: 'תאריך הפרסום',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.publicitydate_unix  
//   }

// ]

// export const columns2 = [
//   {
//     name: 'מרחק במטרים',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.distance_m
//   },
//   {
//     name: 'סוג הערר',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.descriptor
//   },
//   {
//     name: 'מספר ערר',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.numb
//   },
//   {
//     name: 'תיאור ערר',
//     sortable: true,
//     minWidth: '100px',  
//     cell: row => row.entity_subtype
//   },
//   {
//     name: 'סמכות',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.auth
//   },
//   {
//     name: 'תאריך ישיבה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.meeting_date_unix
//   },
//   {
//     name: 'שם רחוב',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.street_name
//   }

// ]

// export const columns3 = [
//   {
//     name: 'כתובת',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.fulladress
//   },
//   {
//     name: 'יום מכירה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.dealdate_unix
//   },
//   {
//     name: 'סוג נכס',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.dealnaturedescription
//   },
//   {
//     name: 'חדרים',
//     sortable: true,
//     minWidth: '100px',  
//     cell: row => row.assetroomnum
//   },
//   {
//     name: 'קומה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.floorno
//   },
//   {
//     name: 'מ\"ר',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.dealnature
//   },
//   {
//     name: 'שווי מכירה בש\"ח',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.dealamount
//   },
//   {
//     name: 'מחיר למטר בש\"ח',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.price_per_mr
//   },
//   {
//     name: 'פרויקט חדש',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.newprojecttext
//   },
//   {
//     name: 'שם פרויקט',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.projectname
//   }

// ]

// export const columns4 = [
//   {
//     name: 'כתובת',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.fulladress
//   },
//   {
//     name: 'יום מכירה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.dealdate_unix
//   },
//   {
//     name: 'סוג נכס',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.dealnaturedescription
//   },
//   {
//     name: 'חדרים',
//     sortable: true,
//     minWidth: '100px',  
//     cell: row => row.assetroomnum
//   },
//   {
//     name: 'קומה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.floorno
//   },
//   {
//     name: 'מ\"ר',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.dealnature
//   },
//   {
//     name: 'שווי מכירה בש\"ח',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.dealamount
//   },
//   {
//     name: 'מחיר למטר בש\"ח',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.price_per_mr
//   },
//   {
//     name: 'פרויקט חדש',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.newprojecttext
//   },
//   {
//     name: 'שם פרויקט',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.projectname
//   }

// ]

// export const columns5 = [
//   {
//     name: 'זכות',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field3
//   },
//   {
//     name: 'סוג מבנה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field4
//   },
//   {
//     name: 'מרתף',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field5
//   },
//   {
//     name: 'תיאור',
//     sortable: true,
//     minWidth: '100px',  
//     cell: row => row.field6
//   },
//   {
//     name: 'ערך',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field7
//   },
//   {
//     name: 'יחידה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field8
//   },
//   {
//     name: 'מקסימום/מינימום',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field9
//   },
//   {
//     name: 'ייעוד',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field10
//   },
//   {
//     name: 'תכנית',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field11
//   },
//   {
//     name: 'הערה',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field13
//   }

// ]

// export const columns6 = [
//   {
//     name: 'זכות',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field2
//   },
//   {
//     name: 'מספר תכנית',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.p_name
//   },
//   {
//     name: 'שם תכנית',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field4
//   },
//   {
//     name: 'תאריך הפקדה',
//     sortable: true,
//     minWidth: '100px',  
//     cell: row => row.field5
//   },
//   {
//     name: 'תאריך מתן תוקף',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field6
//   },
//   {
//     name: 'מספר ילקוט פרסומים',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.field7
//   }
// ]

// export const columns7 = [
//   {
//     name: 'מרחק במטרים',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.distance_m
//   },
//   {
//     name: 'סוג תכנית',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.entity_subtype_desc
//   },
//   {
//     name: 'מספר תכנית',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.pl_number
//   },
//   {
//     name: 'מטרות תכנית',
//     sortable: true,
//     minWidth: '100px',  
//     cell: row => row.matarot
//   },
//   {
//     name: 'סטטוס תכנית',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.station_desc
//   },
//   {
//     name: 'תאריך עדכון אחרון',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.snap_last_update_unixtime
//   },
//   {
//     name: 'קישור לתכנית',
//     sortable: true,
//     minWidth: '100px',
//     cell: row => row.pl_url
//   }
// ]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: row => row.salary
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    sortable: true,
    name: 'Full Name',
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    sortable: true,
    name: 'Email',
    minWidth: '250px',
    selector: row => row.email
  },
  {
    sortable: true,
    name: 'Position',
    minWidth: '250px',
    selector: row => row.post
  },
  {
    sortable: true,
    name: 'Office',
    minWidth: '150px',
    selector: row => row.city
  },
  {
    sortable: true,
    name: 'Start Date',
    minWidth: '150px',
    selector: row => row.start_date
  },
  {
    sortable: true,
    name: 'Salary',
    minWidth: '150px',
    selector: row => row.salary
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Post',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'City',
    sortable: true,
    minWidth: '150px',
    selector: row => row.city
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '100px',
    selector: row => row.salary
  }
]

export default ExpandableTable
