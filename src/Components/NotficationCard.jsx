import LightNotification  from "../Assets/Light.png"
import  tempNotification  from "../Assets/Temp.png"
import  humidityNotification  from "../Assets/Humidity.png"
const NotificationCard = () => {
    return ( 
        <div className="bg-white/40 shadow-xl flex flex-col w-[230px] h-[130px] items-center rounded-3xl">
                <h1 className="text-lg"> Mona Lisa </h1>
                <h2 className="text-sm "> 02/12/2023 16:17 </h2>
                <div className="flex flex-col h-[100px] w-[210px]"> 
                    <div className=" h-1/3 w-[210px] flex flex-row justify-between items-center px-2">
                       
                        <h2 className="text-sm"> Light levels too dim!</h2>
                        <img src={LightNotification} alt="LightNotification" />
                     </div>
                    
                    <div className="h-1/3 w-[210px] flex flex-row  items-center justify-between px-2"> 
                    
                    <h2 className="text-sm">Temperature too high!</h2> 
                    <img  src={tempNotification} alt="tempNotification" />

                    </div>

                    <div className="h-1/3 w-[210px] flex flex-row items-center justify-between px-2">
                    
                        <h2 className="text-sm" > Too humid!</h2> 
                         <img src={humidityNotification} alt="humidityNotification" />
                         </div>
                </div>
            

            </div>
     );

}
export default NotificationCard;