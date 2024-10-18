import "./all.scss";
import { PiStarFourFill } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TiVideo } from "react-icons/ti";

const ntallObj = {
  Allarr: [
    {
      icon: <PiStarFourFill />,
      img: "https://yt3.googleusercontent.com/QqJfK-0gx-9M9y3do7vgEA8dgxgxY7QBTNWt81Y8wHIXWl38ftVkmQZQNtRDuF2_F5cFsVX40A=s900-c-k-c0x00ffffff-no-rj",
      heading: "Recent post from First India News",
      label:
        "#Jaipur: शिक्षा विभाग से बड़ी खबर, 8 तृतीय श्रेणी शिक्षकों के तबादले, बीकानेर में 8 तृतीय श्रेणी शिक्षकों के तबादले #RajasthanWithFirstIndia #TransferNews @RajGovOfficial @i_dimplesharma https://pic.x.com/bStBMWb0ve",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      icon: <PiStarFourFill />,
      img: "https://upload.wikimedia.org/wikipedia/en/c/c4/Rajasthan_Police_Logo.png",
      heading: "Recent post from Rajasthan Police",
      label:
        "हजरत पैगंबर मोहम्मद साहब के जन्मदिन के रूप में मनाई जाती है #ईद_ए_मिलादुन्नबी। शांति, भाईचारे, इबादत और सच्चाई की राह पर चलने की सीख देते हैं पैगंबर मोहम्मद।आइए उनके दिए पैगाम को अमल में लाएं। आप सभी को तहे दिल से इस पाक पर्व की मुबारकबाद। #EidMiladUnNabi#RajasthanPolice https://pic.x.com/r3bmptYGyK",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      icon: <TiVideo />,
      img: "https://yt3.googleusercontent.com/T5ltIUteczA2n9OJfjCEAYU1PZ_Mqbr3BkUrcgj7IvvkU5w8w3-wieb_KPCk--ZRNfNmesqXGg=s900-c-k-c0x00ffffff-no-rj",
      heading: "NDTV is LIVE: World 24X7",
      label: "",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      icon: <TiVideo />,
      img: "https://yt3.googleusercontent.com/T5ltIUteczA2n9OJfjCEAYU1PZ_Mqbr3BkUrcgj7IvvkU5w8w3-wieb_KPCk--ZRNfNmesqXGg=s900-c-k-c0x00ffffff-no-rj",
      heading: "NDTV is LIVE: #USElectionWatch",
      label: "",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      icon: <TiVideo />,
      img: "https://play-lh.googleusercontent.com/t8I2oBJs_VLgtz3SCJgf1_qotB7PetRQSVlT8KaHyNq9I_LPILOcQNDq44AARftBgbyV",
      heading: "AajTak is LIVE: #Live",
      label: "मारा गया हिज्बुल्लाह चीफ हसन नसरल्लाह, इजरायली सेना का दावा",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      icon: <TiVideo />,
      img: "https://play-lh.googleusercontent.com/t8I2oBJs_VLgtz3SCJgf1_qotB7PetRQSVlT8KaHyNq9I_LPILOcQNDq44AARftBgbyV",
      heading: "AajTak is LIVE: LIVE |",
      label: "कंगना हैं कि मानती नहीं...",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      icon: <TiVideo />,
      img: "https://upload.wikimedia.org/wikipedia/en/c/c4/Rajasthan_Police_Logo.png",
      heading: "Bharatpur Police",
      label:
        "जिला पुलिस अधीक्षक श्री @ips_mridul के निर्देशन में ,🔶थाना #रूपवास पुलिस की त्वरित कार्यवाही,🚨प्रार्थी की नाबालिक पुत्री के साथ अभद्र व्यवहार व छेड़छाड़ के मामले में ,🚨2 आरोपियों को किया #गिरफ्तार @RajCMO @RajGovOfficial @PoliceRajasthan @DmBharatpur @BhajanlalBjp https://pic.x.com/NequqtFnnt",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      icon: <TiVideo />,
      img: "https://yt3.googleusercontent.com/T5ltIUteczA2n9OJfjCEAYU1PZ_Mqbr3BkUrcgj7IvvkU5w8w3-wieb_KPCk--ZRNfNmesqXGg=s900-c-k-c0x00ffffff-no-rj",
      heading: "NDTV is LIVE: ",
      label: "Manoj Sinha Exclusive",
      dot: <HiOutlineDotsHorizontal />,
    },
    {
      icon: <TiVideo />,
      img:"https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/12/bjp-1.jpg",
      heading: "BJP is LIVE: ",
      label:
        "प्रधानमंत्री श्री नरेन्द्र मोदी झारखंड के हजारीबाग में विशाल परिवर्तन महासभा को संबोधित कर रहे हैं।",
      dot: <HiOutlineDotsHorizontal />,
    },
  ],
};

const AllData = () => {
  return (
    <>
      {ntallObj.Allarr.map((el) => {
        return (<>
        <div className="allMain_cont">
            <div className="icon_cont"><h2>{el.icon}</h2></div>
            <div className="content_noti_cont">
               <div class="d-flex justify-content-between"><img style={{width:"50px",height:"50px",borderRadius:"50px"}} src={el.img} alt='jfjdf'/> <span>{el.dot}</span></div>
                <h6>{el.heading}</h6>
                <p >{el.label}</p>                           
            </div>         
           
          </div> <hr/>
          </>
        );
       
      })}
      
    </>
   
  );
};
export default AllData;
