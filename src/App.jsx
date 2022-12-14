import './App.css'
import data from './parentjobs_api.json'

function App() {
  const resultsArr = data.results
  const headobj=(resultsArr[0])

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "pink" }}>Parent Jobs Details</h1>
      <table style={{ border: "2px black" }} >

        <tr>
          <th >count</th>
          <td >{data.count}</td>
        </tr>
        <tr>
          <th>next</th>
          <td><a href={data.next} target="_blank">{data.next}</a></td>
        </tr>
        <tr>
          <th>previous</th>
          <td><a href={data.previous} target="_blank">{data.previous}</a></td>
        </tr>
        <tr>
          <th colSpan={2}>results</th>

        </tr>
      </table>
      <table>

        <thead>
        {
          Object.keys(headobj).map((key, index) => {
            return (

              <th className='header' key={index}>{key}</th>
            )
            
          } )
        }
        </thead>



        {
          resultsArr.map((result) => {
            const { mode, no_db, proxy, browser, fg_flag, ext_method, fresh_data, crawl_modes, html_persist, kafka_topics, random_webgl
              , with_session, no_pagination, count_per_page, render_browser, source_python3, shuffle_browser, mandatory_fields, browser_automation } = result.crawl_options
            const { execution_scenario, crawl_type, vertical, tracking_code, execution_expires, project_name, max_threads, max_urls_per_split, mins_to_split, added_by_name, modified_by_name, expiry,
              recrawl_mode, iteration_version, added_by, flexi_group, local_seed_file, remote_seed_file, my_seed_files, numchild, no_of_urls, execution_start_time, execution_completion_time, machine_tags, userid, extraction_method, s3_file_path, rejection_reason, expected_completion_time, is_daily_refresh, periodicity, subscription_templates, account_job_instructions, job_tags, modified_by, preferred_execution_pool, execution_pool, periodic_task, periodic_parent_pointer, re_crawl_rule, machines } = result

              
            return (

              < >
                <tbody>
                  <tr>
                    <td>{result.id}</td>

                    <td>{local_seed_file }</td>
                    <td>{remote_seed_file }</td>
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



                    <td>
                      <details>
                        <table>
                          <tr>
                            <th>mode</th>
                            <td>{mode}</td>
                          </tr>
                          <tr>
                            <th>no_db</th>
                            <td>{no_db}</td>
                          </tr>
                          <tr>
                            <th colSpan={2}>proxy</th>
                          </tr>

                          {proxy.map((i) => {
                            return <tr><td colSpan={2}>{i}</td></tr>
                          })}

                          <tr>
                            <th>browser</th>
                            <td>{browser}</td>
                          </tr>
                          <tr>
                            <th>fg_flag</th>
                            <td>{fg_flag}</td>
                          </tr>
                          <tr>
                            <th>ext_method</th>
                            <td>{ext_method}</td>
                          </tr>
                          <tr>
                            <th>fresh_data</th>
                            <td>{fresh_data}</td>
                          </tr>
                          <tr>
                            <th>crawl_modes</th>
                            <td>{crawl_modes}</td>
                          </tr>
                          <tr>
                            <th>html_persist</th>
                            <td>{html_persist}</td>
                          </tr>
                          <tr>
                            <th colSpan={2}>kafka_topics</th>
                         </tr>
                            {kafka_topics.map((i) => {
                              return <tr><td colSpan={2}>{i}</td></tr>
                            })}
                         
                          <tr>
                            <th>random_webgl</th>
                            <td>{random_webgl}</td>
                          </tr>
                          <tr>
                            <th>with_session</th>
                            <td>{with_session}</td>
                          </tr>
                          <tr>
                            <th>no_pagination</th>
                            <td>{no_pagination}</td>
                          </tr>
                          <tr>
                            <th>count_per_page</th>
                            <td>{count_per_page}</td>
                          </tr>
                          <tr>
                            <th>render_browser</th>
                            <td>{render_browser}</td>
                          </tr>
                          <tr>
                            <th>source_python3</th>
                            <td>{source_python3}</td>
                          </tr>
                          <tr>
                            <th>shuffle_browser</th>
                            <td>{shuffle_browser}</td>
                          </tr>
                          <tr>
                            <th>mandatory_fields</th>
                            <td>{mandatory_fields}</td>
                          </tr>
                          <tr>
                            <th>browser_automation</th>
                            <td>{browser_automation==true?"true":"false"}</td>
                          </tr>

                        </table>
                      </details>
                    </td>






                    <td>{result.source}</td>
                    <td>{result.priority}</td>
                    <td ><th><b>crawl_spec</b></th><td>{result.tags.crawl_spec}</td></td>
                    <td>{machine_tags == {} ? "{}" : ""}</td>
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
                    <td>{is_daily_refresh == false ? "false" : "true"}</td>
                    <td>{added_by_name}</td>
                    <td>{modified_by_name}</td>
                    <td>{periodicity == {} ? "{}" : ""}</td>
                    <td>{subscription_templates == {} ? "{}" : ""}</td>
                    <td>{account_job_instructions == {} ? "{}" : ""}</td>
                    <td>{job_tags == {} ? "{}" : ""}</td>
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
                    <td>{machines == [] ? "[]" : ""}</td>


                  </tr>
                </tbody>
              </>
            )
          })
        }
      </table>
    </div>
  )
}

export default App
