import './App.css'
import data from './parentjobs_api.json'

function App() {
  const resultsArr = data.results

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" ,color:"pink" }}>Parent Jobs Details</h1>
      <table style={{border:"2px black"}} >
     
        <tr>
          <th>count</th>
          <td>{data.count}</td>
        </tr>
        <tr>
          <th>next</th>
          <td>{data.next}</td>
        </tr>
        <tr>
          <th>previous</th>
          <td>{data.previous}</td>
        </tr>
        <tr>
          <th>results</th>
          <td></td>
       </tr>
      </table>
      <table>
      
        <tr className='header'>
          <th>id</th>
          <th>local_seed_file</th>
          <th>remote_seed_file</th>
          <th>status_verbose</th>
          <th>my_seed_files</th>
          <th>depth</th>
          <th>numchild</th>
          <th>created_at</th>
          <th>modified_at</th>
          <th>no_of_urls</th>
          <th>execution_start_time</th>
          <th>execution_completion_time</th>
          <th>status</th>
          <th>crawl_options</th>
          <th>source</th>
          <th>priority</th>
          <th>tags</th>
          <th>machine_tags</th>
          <th>parenting_role</th>
          <th>execution_scenario</th>
          <th>crawl_type</th>
          <th>vertical</th>
          <th>tracking_code</th>
          <th>execution_expires</th>
          <th>project_name</th>
          <th>userid</th>
          <th>extraction_method</th>
          <th>max_threads</th>
          <th>max_urls_per_split</th>
          <th>mins_to_split</th>
          <th>s3_file_path</th>
          <th>rejection_reason</th>
          <th>expected_completion_time</th>
          <th>is_daily_refresh</th>
          <th>added_by_name</th>
          <th>modified_by_name</th>
          <th>periodicity</th>
          <th>subscription_templates</th>
          <th>account_job_instructions</th>
          <th>job_tags</th>
          <th>expiry</th>
          <th>recrawl_mode</th>
          <th>iteration_version</th>
          <th>added_by</th>
          <th>modified_by</th>
          <th>flexi_group</th>
          <th>preferred_execution_pool</th>
          <th>execution_pool</th>
          <th>periodic_task</th>
          <th>periodic_parent_pointer</th>
          <th>re_crawl_rule</th>
          <th>machines</th>

        </tr>



        {
          resultsArr.map((result) => {
            const { mode, no_db, proxy, browser, fg_flag, ext_method, fresh_data, crawl_modes, html_persist, kafka_topics, random_webgl
              , with_session, no_pagination, count_per_page, render_browser, source_python3, shuffle_browser, mandatory_fields, browser_automation } = result.crawl_options
            const { execution_scenario, crawl_type, vertical, tracking_code, execution_expires, project_name, max_threads, max_urls_per_split, mins_to_split, added_by_name, modified_by_name, expiry,
              recrawl_mode, iteration_version, added_by, flexi_group,local_seed_file ,remote_seed_file,my_seed_files,numchild,no_of_urls,execution_start_time,execution_completion_time,machine_tags,userid,extraction_method,s3_file_path,rejection_reason,expected_completion_time,is_daily_refresh,periodicity,subscription_templates,account_job_instructions,job_tags,modified_by,preferred_execution_pool,execution_pool,periodic_task,periodic_parent_pointer,re_crawl_rule,machines} = result
            return (

              < >

                <tr>
                  <td>{result.id}</td>
                  <td>{local_seed_file==null?"null":""}</td>
                  <td>{remote_seed_file==null?"null":""}</td>
                  <td>{result.status_verbose}</td>
                  <td>{my_seed_files}</td>
                  <td>{result.depth}</td>
                  <td>{numchild}</td>
                  <td>{result.created_at}</td>
                  <td>{result.modified_at}</td>
                  <td>{no_of_urls}</td>
                  <td>{execution_start_time}</td>
                  <td>{execution_completion_time}</td>
                  <td>{result.status}</td>
                  
                  <td style={{textAlign:"left"}}>  <details>
                    <p>Mode : {mode}</p>
                    <p>no_db : {no_db}</p>
                    <p>Proxy :{proxy.map((i) => {
                      return <p style={{ display: "inline" }}>"{i}",</p>
                    })}</p>
                    <p>Browser :{browser}</p>
                    <p>fg_flag :{fg_flag}</p>
                    <p>ext_method :{ext_method}</p>
                    <p>fresh_data :{fresh_data == true ? "true" : "false"}</p>
                    <p>crawl_modes :{crawl_modes}</p>
                    <p>html_persist :{html_persist}</p>
                    <p>kafka_topics :{kafka_topics.map((i) => {
                      return <p style={{ display: "inline" }}>"{i}",</p>
                    })}</p>
                    <p>random_webgl :{random_webgl}</p>
                    <p>with_session :{with_session}</p>
                    <p>no_pagination :{no_pagination}</p>
                    <p>count_per_page :{count_per_page}</p>
                    <p>render_browser :{render_browser}</p>
                    <p>source_python3 :{source_python3 == true ? "true" : "false"}</p>
                    <p>shuffle_browser :{shuffle_browser}</p>
                    <p>mandatory_fields :{mandatory_fields}</p>
                    <p>browser_automation :{browser_automation == true ? "true" : "false"}</p>
                  </details></td>


                  <td>{result.source}</td>
                  <td>{result.priority}</td>
                  <td ><th><b>crawl_spec</b></th><td>{result.tags.crawl_spec}</td></td>
                  <td>{machine_tags=={}?"{}":""}</td>
                  <td>{result.parenting_role}</td>
                  <td>{execution_scenario}</td>
                  <td>{crawl_type}</td>
                  <td>{vertical}</td>
                  <td>{tracking_code}</td>
                  <td>{execution_expires}</td>
                  <td>{project_name}</td>
                  <td>{userid}</td>
                  <td>{extraction_method}</td>
                  <td>{max_threads}</td>
                  <td>{max_urls_per_split}</td>
                  <td>{mins_to_split}</td>
                  <td>{s3_file_path}</td>
                  <td>{rejection_reason}</td>
                  <td>{expected_completion_time}</td>
                  <td>{is_daily_refresh==false?"false":"true"}</td>
                  <td>{added_by_name}</td>
                  <td>{modified_by_name}</td>
                  <td>{periodicity=={}?"{}":""}</td>
                  <td>{subscription_templates=={}?"{}":""}</td>
                  <td>{account_job_instructions=={}?"{}":""}</td>
                  <td>{job_tags=={}?"{}":""}</td>
                  <td>{expiry}</td>
                  <td>{recrawl_mode}</td>
                  <td>{iteration_version}</td>
                  <td>{added_by}</td>
                  <td>{modified_by}</td>
                  <td>{flexi_group}</td>
                  <td>{preferred_execution_pool}</td>
                  <td>{execution_pool}</td>
                  <td>{periodic_task}</td>
                  <td>{periodic_parent_pointer}</td>
                  <td>{re_crawl_rule}</td>
                  <td>{machines==[]?"[]":""}</td>

                 
                </tr>
              </>
            )
          })
        }
      </table>
    </div>
  )
}

export default App
