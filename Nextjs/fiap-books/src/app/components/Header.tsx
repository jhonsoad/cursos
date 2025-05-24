import { AccountCircle, Menu } from '@mui/icons-material'
export default function Header(){
    return(
      <div className="flex absolute top-0 justify-between items-center w-[100vw] bg-black-900 border-b border-b-pink-900 min-h-24">
        <Menu className="mt-l-[10px] text-pink-900" style={{fontSize:48}}/>
        <AccountCircle className="m-r-[10px] text-pink-900" style={{fontSize:48}}/>
      </div>
    )
}