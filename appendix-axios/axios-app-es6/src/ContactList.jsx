import { useState } from "react";
import { useFetch } from "./hooks/useAxios";

const ContactList = () => {
  const [name, setName] = useState("ja");
  const { response, isLoading, error, requestFetch } = useFetch(
    `/contacts_long/search/${name}`,
    { timeout: 10000 }
  );

  const searchContacts = () => {
    if (!name || name.length < 2) {
      alert("조회를 위해 두글자 이상을 입력하세요");
      return;
    }
    requestFetch();
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={searchContacts}>조회</button>
      <br />
      <ul>
        {error ? (
          <h3>에러 발생 : {error.message}</h3>
        ) : response ? (
          response.data.map((item) => {
            return (
              <li key={item.no}>
                {item.name} : {item.tel} : {item.address}{" "}
              </li>
            );
          })
        ) : (
          ""
        )}
      </ul>
      {isLoading ? <h3>조회중</h3> : ""}
    </div>
  );
};

export default ContactList;
