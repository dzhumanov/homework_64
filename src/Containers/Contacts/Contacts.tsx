const Contacts = () => {
  return (
    <div>
      <h1 className="text-center mt-3 text-primary">How to contact us:</h1>
      <div className="row">
        <div className="col-6">
          <h3 className="text-center">Our Adress:</h3>
          <p className="text-center">Sovetskaya 7</p>
        </div>
        <div className="col-6">
            <h3 className="text-center">Our Phone Number:</h3>
            <p className="text-center">+996 708 49 99 70</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center fs-1 mt-5 fw-bold">
            Have more questions? Consider mailing us: temadjumanov@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Contacts;
