import { useState } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { Checkbox } from 'antd';
import * as actionCreator from 'store/actionCreators'


function Authority() {
  const roles = useSelector(state => state.roles);
  const dispatch = useDispatch();


  const onChange = (value) => {
    dispatch(actionCreator.creatSetRoles(value));
  }

  return (
    <div style={{fontSize: 14}}>
      <div style={{marginBottom: 16, letterSpacing: 1}}>你的权限: {JSON.stringify(roles)}</div>
      <div>
        <span style={{display: 'inline-block', marginRight: 16}}>切换权限路由:</span>
        <Checkbox.Group defaultValue={roles} onChange={onChange} >
          {
            ["user", "admin"].map(role => {
              const isChecked = roles.indexOf(role) > -1 ? true : false;
              const isDisabled = isChecked && roles.length === 1 ? true : false;
              return <Checkbox value={role} key={role} disabled={isDisabled}>{role}</Checkbox>
            })
          }
        </Checkbox.Group>
      </div>
    </div>
  )
}

export default Authority;
