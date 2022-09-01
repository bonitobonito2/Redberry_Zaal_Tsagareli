import axios from "axios";

const request = async (dataa) => {
  const result = await axios.post(
    "https://pcfy.redberryinternship.ge/api/laptop/create",
    dataa
  );
  const data = await result.data;
  console.log(await data);
};

function postRequestHandler(dataa) {
  const data = new FormData();
  data.append("name", "ზაალი");
  data.append("surname", "ზაალი");
  data.append("team_id", 1);
  data.append("position_id", 1);
  data.append("phone_number", "+995555555555");
  data.append("email", "gela.gelashvili@redberry.ge");
  data.append("token", "df3cc1dcbd11dd46de68e1cc11841c8c");
  data.append("laptop_name", "HP");
  data.append("laptop_image", dataa.image);
  data.append("laptop_brand_id", 1);
  data.append("laptop_cpu", "Intel Core i3");
  data.append("laptop_cpu_cores", 64);
  data.append("laptop_cpu_threads", 128);
  data.append("laptop_ram", 16);
  data.append("laptop_hard_drive_type", "HDD");
  data.append("laptop_hard_drive_type", "HDD");
  data.append("laptop_state", "used");
  data.append("laptop_price", 1500);
  request(data);
}

export default postRequestHandler;
