import './App.css'
import data from './parentjobs_api.json'

function App() {
  const resultsArr = data.results
  
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Parents Job Detail</h1>
      
      <div className='parents'>
        {
          resultsArr.map((result) => {
            const {mode,no_db,proxy,browser,fg_flag,ext_method,fresh_data,crawl_modes,html_persist,kafka_topics,random_webgl
            ,with_session,no_pagination,count_per_page,render_browser,source_python3,shuffle_browser,mandatory_fields,browser_automation}=result.crawl_options
            const {execution_scenario,crawl_type,vertical,tracking_code,execution_expires,project_name,max_threads,max_urls_per_split,mins_to_split,added_by_name,modified_by_name,expiry,
              recrawl_mode,iteration_version,added_by,flexi_group}=result
            return (
              <div key={result.id}>
                <div className='p'  >
                  <h2>id :{result.id}</h2>
                  <h2>status_verbose :{result.status_verbose}</h2>
                  <h2>depth : {result.depth}</h2>
                  <h2>created_at  :{result.created_at}</h2>
                  <h2>modified_at  :{result.modified_at}</h2>
                  <h2>status  :{result.status}</h2>
                  <h2>source  :{result.source}</h2>
                  <h2>priority:{result.priority}</h2>
                  <h2>crawl_spe :{result.tags.crawl_spec}c</h2>
                  <h2>parenting_role:{result.parenting_role}</h2>
                  <h2>execution_scenario: {execution_scenario}</h2>
                  <h2>crawl_type: {crawl_type}</h2>
                  <h2>vertical: {vertical}</h2>
                  <h2>tracking_code: {tracking_code}</h2>
                  <h2>execution_expires: {execution_expires}</h2>
                  <h2>project_name: {project_name}</h2>
                  <h2>max_threads: {max_threads}</h2>
                  <h2>max_urls_per_split: {max_urls_per_split}</h2>
                  <h2>mins_to_split: {mins_to_split}</h2>
                  <h2>added_by_name: {added_by_name}</h2>
                  <h2>modified_by_name: {modified_by_name}</h2>
                  <h2>expiry: {expiry}</h2>
                  <h2>recrawl_mode: {recrawl_mode}</h2>
                  <h2>iteration_version: {iteration_version}</h2>
                  <h2>added_by: {added_by}</h2>
                  <h2>flexi_group: {flexi_group}</h2>

                  <details>
                    <summary style={{fontSize:"20px",color:"red"}} >crawl_options</summary>
                    <p>Mode : {mode}</p>
                    <p>no_db : {no_db}</p>
                    <p>Proxy :{proxy.map((i)=>{
                      return <p style={{display:"inline"}}>"{i}",</p>
                    })}</p>
                    <p>Browser :{browser}</p>
                    <p>fg_flag :{fg_flag}</p>
                    <p>ext_method :{ext_method}</p>
                    <p>fresh_data :{fresh_data==true?"true":"false"}</p>
                    <p>crawl_modes :{crawl_modes}</p>
                    <p>html_persist :{html_persist}</p>
                    <p>kafka_topics :{kafka_topics.map((i)=>{
                      return <p style={{display:"inline"}}>"{i}",</p>
                    })}</p>
                    <p>random_webgl :{random_webgl}</p>
                    <p>with_session :{with_session}</p>
                    <p>no_pagination :{no_pagination}</p>
                    <p>count_per_page :{count_per_page}</p>
                    <p>render_browser :{render_browser}</p>
                    <p>source_python3 :{source_python3==true?"true":"false"}</p>
                    <p>shuffle_browser :{shuffle_browser}</p>
                    <p>mandatory_fields :{mandatory_fields}</p>
                    <p>browser_automation :{browser_automation==true?"true":"false"}</p>
                  </details>

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
