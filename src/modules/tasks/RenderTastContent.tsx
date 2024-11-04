import Tasks from "."
import Loader from "../../components/Loader"
import { RenderContentProps } from "../../entities/container"
import { TodoTabType } from "../../entities/modules"
import { Task } from "../../entities/ui"

const todoTabs: TodoTabType[] = [
  "All",
  "Completed",
  "Pending"
]

const RenderContent =({todoTab, isLoading, isSuccess, sortTasks, filteredTasks}: RenderContentProps<Task>) => (
  isLoading ? (
    <div className='h-[50vh] flex justify-center items-center text-[30px]'>
      <Loader />
    </div>
    ) : isSuccess ? (
      <>
        <section className="tab-container flex text-center justify-center gap-8">
          {
            todoTabs.map(tab => {
              return (
                <button 
                  key={tab} 
                  onClick={() => sortTasks(tab)}
                  
                  className={`rounded-none border-0 border-b-2 bg-transparent cursor-pointer ${todoTab === tab ? "text-accent border-accent focus:border-accent" : "text-secondary border-secondary focus:border-primary"} focus:border-0 focus-within::border-0 focus:outline-none focus:border-b`}
                >{tab}</button>
              )
            })
          }
        </section>
        <section className="mt-8">
          <Tasks 
            tasks={(filteredTasks || [])}
          />
        </section>
      </>
    ) : (
      <p style={{
        fontSize: "1.4rem",
        lineHeight: "150%",
        textAlign: "center"
      }}>Failed to fetch</p>
    )
)

export default RenderContent