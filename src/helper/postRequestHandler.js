import axios from "axios";
import token from "../token/token";


 function postRequestHandler(dataa,callBack) {
  let name = localStorage.getItem("სახელი:");
  let surname = localStorage.getItem("გვარი:");
  let teamId = localStorage.getItem("teamID");
  let positionId = localStorage.getItem("positionID");
  let phoneNumber = localStorage.getItem("ტელეფონის ნომერი:");
  let email = localStorage.getItem("მეილი:");
  let leptopName = localStorage.getItem("ლეპტოპის სახელი");
  let leptopBrandID = localStorage.getItem("leptopBrandId");
  let cpu = localStorage.getItem("cpu");
  let cpuCores = localStorage.getItem("CPU-ს ბირთვი");
  let cpuThreads = localStorage.getItem("CPU-ს ნაკადი");
  let ram = localStorage.getItem("ლეპტოპის RAM (GB)");
  let hardDriveType = localStorage.getItem("memoryType");
  let leptopCondition = localStorage.getItem("leptopCondition");
  let price = localStorage.getItem("ლეპტოპის ფასი, ₾");

  let date = localStorage.getItem("შეძენის რიცხვი (არჩევითი)");

  if (leptopCondition === "ახალი") {
    leptopCondition = "new";
  }
  if (leptopCondition === "მეორადი") {
    leptopCondition = "used";
  }

  const data = new FormData();
  if (date) {
    data.append("laptop_purchase_date", date);
  }
  data.append("name", name);
  data.append("surname", surname);
  data.append("team_id", teamId);
  data.append("position_id", positionId);
  data.append("phone_number", phoneNumber);
  data.append("email", email);
  data.append("token", token);
  data.append("laptop_name", leptopName);
  data.append("laptop_image", dataa.image);
  data.append("laptop_brand_id", leptopBrandID);
  data.append("laptop_cpu", cpu);
  data.append("laptop_cpu_cores", cpuCores);
  data.append("laptop_cpu_threads", cpuThreads);
  data.append("laptop_ram", ram);
  data.append("laptop_hard_drive_type", hardDriveType);
  data.append("laptop_state", leptopCondition);
  data.append("laptop_price", price);

  console.log("akvar bliad");
  console.log(name, "saxeli");
  let succses;
  axios
    .post("https://pcfy.redberryinternship.ge/api/laptop/create", data)
    .then((data) => {
      console.log(data.data);
      callBack(data,false)
    })
    .catch((error) => {
     callBack(error,true)
    });

    return succses
}

export default postRequestHandler;
