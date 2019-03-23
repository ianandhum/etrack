import React from 'react'
import {withTheme,styled} from 'reakit'

import { Toolbar, Backdrop, Sidebar,Block,List,Link} from "reakit"
import {MdMenu,MdClose,MdLiveTv, MdPieChart,MdPeople,MdViewArray,MdGroup,MdSettings} from "react-icons/md/index.mjs"
import {Link as RouterLink,withRouter} from 'react-router-dom'
import {palette,ifProp} from 'styled-tools'
import {Button} from '../util/Buttons'



const MenuList = styled(List)`
  
  li {
    margin:8px 0;
  }
`;


const SectionLink = styled(Link)`
  display: block;
  line-height: 1.75;
  font-weight: 400;
  margin: 3px 0;
  font-size: 15px;
  color: ${ palette("primaryText", -1)};
  border-left: 5px solid ${ ifProp('active' ,palette("secondary"),'transparent')};
  padding-left: 20px;
  margin-left: -16px;
  &:hover {
    border-color: ${palette("primary", 2)};
    text-decoration: none;
    color:${palette("grayscale",2)};
  }
  &.active {
    font-weight: 600;
    border-color: ${palette("primary", 1)};
    & + ${MenuList} {
      display: block;
    }
  }
  & + ${MenuList} {
    display: none;
  }
  &:not(label) + ${MenuList} & {
    padding-left: 40px;
  }
  label& {
    font-size: 1.1em;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.4;
    &:hover,
    &.active {
      border-color: transparent;
    }
  }
  label& + ${MenuList} {
    display: block;
    padding-bottom: 0.75em;
    margin-bottom: 0.75em;
  }
`;

const renderMenu = (list,location)=>{

    return (
        <MenuList marginTop={60} >
            {list.map(({type,content,...rest},index)=>(
                <li key={index}>
                    <SectionLink
                        use={ type ? type : ((rest.to===location.pathname)? 'span' : RouterLink)}
                        {...rest}
                        active={rest.to === location.pathname}
                        >
                        {content}
                    </SectionLink>
                </li>
            ))}           
    </MenuList>
    )

}

const listData = [
    
    {
        content:"overview",
        type:"label",
    },
    {
        content:<>
                    <MdLiveTv/> &nbsp;
                    Live Report
                </>,
        to:"/"
    },
    {
        content:<>
                    <MdPieChart/> &nbsp;
                    Perfomance
                </>,
        to:"/perfomance"
    },
    {
        content:<>
                    <MdPeople/> &nbsp;
                    Employees
                </>,
        to:"/employees"
    },
    {
        content:<>
                    <MdViewArray/> &nbsp;
                    Clients
                </>,
        to:"/clients"
    },
    {
        content:"Settings",
        type:"label",
    },
    {
        content:<>
                    <MdGroup/> &nbsp;
                    Manage Team
                </>,
        to:"/team"
    },
    {
        content:<>
                    <MdSettings/> &nbsp;
                    Account Settings
                </>,
        to:"/account"
    },
    
]
    
const LeftMenu = (props)=>(

    <Sidebar.Container>
    {sidebar => (
        <Block>
            
            <Button
                use={Sidebar.Toggle} 
                {...sidebar}
                borderRadius="50%"
                palette="transparent"
                height={35}
                width={35}
                >
                {
                    (sidebar.visible)?  
                        <Toolbar.Focusable use={MdClose} fontSize={16}/>
                        :
                        <Toolbar.Focusable use={MdMenu} fontSize={16}/>
                }
            </Button>
            <Backdrop fade use={Sidebar.Hide}  {...sidebar} zIndex={-2}/>
            <Sidebar slide align="left" {...sidebar} zIndex={-1} width="220px">
               {renderMenu(listData,props.location)}
            </Sidebar>
        </Block>
    )}
    </Sidebar.Container>
)

export default withRouter(withTheme(LeftMenu))
