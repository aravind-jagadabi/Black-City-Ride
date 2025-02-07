

const PageHeader = () => {
  return(
    <div className = "pageHeader">
      <div className = "pageHeaderLeft">
        <h2 className = "companyLogo">blackCITYride.com</h2>

      </div>
      <div className = "pageHeaderRight">
        <button className = "pageHeaderButton"> Safety</button>
        <button className = "pageHeaderButton"> Help</button>
        <button className = "pageHeaderButton"> Language</button>
        <button className = "pageHeaderButton"> Products</button>
        <button className = "pageHeaderButton"> Log in</button>
        <button className = "pageHeaderButtonT2"> Sign up</button>
      </div>
      
    </div>
  );
}

export default PageHeader;