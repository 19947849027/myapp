import React,{useState } from 'react'
import styles from './style.less'
import { Drawer,Button } from 'antd';
import {AimOutlined} from '@ant-design/icons';

const TableContent = ({children,titleName,filter,add}:any) => {
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  let filterNode = '';
  if (filter && typeof filter === 'function') {
    filterNode = filter({ close: () => setVisible(false) });
  }
  console.log(filterNode)
  return (
    <div className={styles.boxStyle}>
      <div className={styles.header} style={{height:'60px'}}>
      {titleName && (<span>{titleName}</span>)}
      {filter && (
          <button
            className={styles.filterBtn}
            onClick={() => {
              setVisible(true)
            }}
          >
            <span className="icons-list" style={{marginRight:'5px'}}><AimOutlined/></span>
            筛选
          </button>
        )}
      </div>
      <div style={{padding:'10px'}}>
        {children}
      </div>
      <Drawer
        title="篩選"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {filterNode}
      </Drawer>
      {
        add && (<Button type="primary">添加</Button>)
      }

    </div>
  )
}
export default TableContent