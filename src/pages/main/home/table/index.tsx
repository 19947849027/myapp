import React,{FC} from 'react'
import { Table } from 'antd';
import styles from './style.less'
const HomePage =()=> {
  // const [state, setstate] = useState(initialState)
  const columns:any=[
    {title: 'Full Name',dataIndex: 'name',key: 'name',fixed: 'left',width: 100},
    {title: 'Age',dataIndex: 'age',key: 'age',fixed: 'left',width: 100},
    {title: 'Column 1',dataIndex: 'address',key: '1',width: 150},
    {title: 'Column 2',dataIndex: 'address',key: '2',width: 150},
    {title: 'Column 3',dataIndex: 'address',key: '3',width: 150},
    {title: 'Column 4',dataIndex: 'address',key: '4',width: 150},
    {title: 'Column 5',dataIndex: 'address',key: '5',width: 150},
    {title: 'Column 6',dataIndex: 'address', key: '6',width: 150},
    {title: 'Column 7',dataIndex: 'address',key: '7',width: 150},
    {title: 'Action',key: 'operation',fixed: 'right',width: 100,
      render: () => <a>action</a>,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  const rowClick =(record:any) =>{
    console.log(record)

  }
  return (
    <div>
     <Table className={styles.tableTitle} 
        columns={columns} 
        dataSource={data} 
        scroll={{ x: 1500, y: 300 }}
        onRow={record => {
          return {
            onClick: () => rowClick(record),
          };
        }}
        />
    </div>
  )
}
export default HomePage
