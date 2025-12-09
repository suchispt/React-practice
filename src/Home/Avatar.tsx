import { IoPersonSharp } from "react-icons/io5"
import "../App.css"


type avatarType = {
    src?: string;
    alt?: string;
    children?: string;
}

const AvatarImg = ({src, alt}: avatarType) => {
    return <div className="avatar">
            <img src={src} alt={alt} />
        </div>
}


const Avatar = ({ src, alt, children }: avatarType) => {
    if(src){
        return <AvatarImg src={src} alt={alt}/>
    }

    if(children){
        return <div className="avatar avatar-letters">
            {children}
        </div>
    }
    
    else {
       return <div className="avatar avatar-icon">
            <IoPersonSharp/>
        </div> 
    }
}

export default Avatar;




