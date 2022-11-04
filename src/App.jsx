import './App.css'
import data from './parentjobs_api.json'

function App() {
  const resultsArr = data.results

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" ,color:"pink" }}>Parent Jobs Details</h1>
      <table>
        <tr className='header'>
          <th>id</th>
          <th>status_verbose</th>
          <th>depth</th>
          <th>created_at</th>
          <th>modified_at</th>
          <th>status</th>
          <th>source</th>
          <th>priority</th>
          <th>crawl_spec</th>
          <th>parenting_role</th>
          <th>execution_scenario</th>
          <th>crawl_type</th>
          <th>vertical</th>
          <th>tracking_code</th>
          <th>execution_expires</th>
          <th>project_name</th>
          <th>max_threads</th>
          <th>max_urls_per_split</th>
          <th>mins_to_split</th>
          <th>added_by_name</th>
          <th>modified_by_name</th>
          <th>expiry</th>
          <th>recrawl_mode</th>
          <th>iteration_version</th>
          <th>added_by</th>
          <th>flexi_group</th>
          <th>crawl_options</th>

        </tr>



        {
          resultsArr.map((result) => {
            const { mode, no_db, proxy, browser, fg_flag, ext_method, fresh_data, crawl_modes, html_persist, kafka_topics, random_webgl
              , with_session, no_pagination, count_per_page, render_browser, source_python3, shuffle_browser, mandatory_fields, browser_automation } = result.crawl_options
            const { execution_scenario, crawl_type, vertical, tracking_code, execution_expires, project_name, max_threads, max_urls_per_split, mins_to_split, added_by_name, modified_by_name, expiry,
              recrawl_mode, iteration_version, added_by, flexi_group } = result
            return (

              < >

                <tr>
                  <td>{result.id}</td>
                  <td>{result.status_verbose}</td>
                  <td>{result.depth}</td>
                  <td>{result.created_at}</td>
                  <td>{result.modified_at}</td>
                  <td>{result.status}</td>
                  <td>{result.source}</td>
                  <td>{result.priority}</td>
                  <td>{result.tags.crawl_spec}</td>
                  <td>{result.parenting_role}</td>
                  <td>{execution_scenario}</td>
                  <td>{crawl_type}</td>
                  <td>{vertical}</td>
                  <td>{tracking_code}</td>
                  <td>{execution_expires}</td>
                  <td>{project_name}</td>
                  <td>{max_threads}</td>
                  <td>{max_urls_per_split}</td>
                  <td>{mins_to_split}</td>
                  <td>{added_by_name}</td>
                  <td>{modified_by_name}</td>
                  <td>{expiry}</td>
                  <td>{recrawl_mode}</td>
                  <td>{iteration_version}</td>
                  <td>{added_by}</td>
                  <td>{flexi_group}</td>
                  <td>  <details>
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
