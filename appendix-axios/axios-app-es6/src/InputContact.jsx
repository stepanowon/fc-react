import { useState } from "react";
import { usePost } from "./hooks/useAxios";

const InputContact = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");

  const { response, isProcessing, error, requestPost } = usePost(`/contacts`, {
    timeout: 10000,
  });

  const addContact = () => {
    if (!name || name.length < 2 || !tel || !address) {
      alert("name은 두글자 이상, tel, address 를 반드시 입력해주세요.");
      return;
    }

    const data = { name, tel, address };
    requestPost(data);
  };

  const addContactHandler = () => {
    addContact();
    setName("");
    setTel("");
    setAddress("");
  };

  return (
    <div>
      이름 :{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      전화 :{" "}
      <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
      <br />
      주소 :{" "}
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addContactHandler}>연락처 추가</button>
      <br />
      {error ? (
        <h3>에러 발생 : {error.message}</h3>
      ) : response ? (
        <h3>{response.data.message}</h3>
      ) : (
        ""
      )}
      {isProcessing ? <h3>처리중</h3> : ""}
    </div>
  );
};

export default InputContact;
