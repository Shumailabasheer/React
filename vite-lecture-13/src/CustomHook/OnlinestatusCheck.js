import { useEffect, useState } from "react";


const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
// ==navigator.onLine → initial internet status

  useEffect(() => {

    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
// ==addEventListener → online/offline detect karta hai

    return () => {
      window.removeEventListener("online", goOnline)
      window.removeEventListener("offline", goOffline)
    } 
    // removeEventListener → listener cleanup karta hai
// ==jab useEffect ka under event lagae usy remove krna zarori ha q ka react re-render krti ha comp

  }, []);

  return isOnline;
}

export default useOnlineStatus