const NotificationCard = () => {
    return ( 
        <div className="bg-red-300 flex flex-col w-[230px] h-[100px] items-center ">
                <h1 className="text-lg"> title </h1>
                <div className="bg-green-300  flex flex-col h-[100px] w-[200px]"> 
                    <div className="bg-yellow-500 h-1/3 w-[200px]">
                        <h2> bro</h2>
                        
                     </div>
                    
                    <div className="bg-purple-500 h-1/3 w-[200px]"> 
                    <h2>Mannnn</h2> </div>
                    <div className="bg-white-300 h-1/3 w-[200px]">
                        <h3> yes</h3> </div>

                </div>
            

            </div>
     );

}
export default NotificationCard;