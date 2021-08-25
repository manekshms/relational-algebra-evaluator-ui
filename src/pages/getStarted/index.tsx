import { InfoLayout } from "../../components/layouts/info/InfoLayout";

export const GetStarted = () => {
  return (
    <InfoLayout>
      <div className="container mx-auto max-w-screen-lg">
        <h3 className="text-4xl pt-5 mb-5 ">Get Started</h3>
        <p>🔥 Relational algebra evaluator</p>
        <h3 className="text-2xl pt-5 mb-2 ">Adding your own relations</h3>
        <p>
          There are some relations already added for the current session. To add
          a custom relation to the current session, addRelations method help to
          add custom relations to current session. Custom relations should be a
          json format, sample schema for the json file is given below.
        </p>
        <pre>
          {`{
            "relation-name-here":  [
              { "key": "value" }
              ...
            ]
          }`}
        </pre>
        <h3 className="text-2xl pt-5 mb-2 ">View All Relations</h3>
        <p>To view all relations via executing command</p>
        <pre>show relations</pre>
        <h3 className="text-2xl pt-5 mb-2 ">View Relation/Variable</h3>
        <p>view data in a relation or variable by executing command </p>
        <pre>view relation-name </pre>
        <h3 className="text-2xl pt-5 mb-2 ">Creating variable</h3>
        <p>
          Creating variables can be helpful for the user to save the result of
          one operation and it can be used in future.
        </p>
        <pre>
          {" "}
          var userLocation = P/name, address/(users) P/name/(userLocation){" "}
        </pre>
        <p>
          In the above example, the name and address column from users’ relation
          is projected then saved the result to a variable. In the second
          command, it takes the name column from the variable userLocation using
          projection.
        </p>
        <h3 className="text-2xl pt-5 mb-2 ">
          Working with nested Relational Algebraic Operations
        </h3>
        <p>
          A Relational Algebraic Evaluator can execute operators recursively. If
          the entered relation algebraic expression contains a nested operation,
          then the system will go deep into the last nested operation and start
          to evaluate it until it reaches the parent expression.
        </p>
        <pre>S/name=Bob/( ( P/name, address/(users) ) )</pre>
        <p>
          In the above command initially, it will do the nested projection
          operation and then it will execute the selection operation
        </p>
        <h3 className="text-3xl pt-5 mb-2 ">Operations</h3>
        <h3 className="text-2xl pt-5 mb-2 ">Projection</h3>
        <pre>P/title,author,publication/(book) </pre>
        <h3 className="text-2xl pt-5 mb-2 ">Selection</h3>
        <pre>S/publication=AMC/(book)</pre>
        <h3 className="text-2xl pt-5 mb-2 ">Cartesian Product</h3>
        <pre>X(maleTable,femaleTable) </pre>
        <h3 className="text-2xl pt-5 mb-2 ">Union</h3>
        <pre>
          U( (P/id,name/( (S/city=Pune/(salesPeople)) )), ( P/id,name/(
          (S/city=Pune/(customers)) ) ) ){" "}
        </pre>
        <h3 className="text-2xl pt-5 mb-2 ">Set Difference</h3>
        <pre>SD(tableA, tableB)</pre>
        <h3 className="text-2xl pt-5 mb-2 ">Rename</h3>
        <pre>R/newRelationName/(users) </pre>
      </div>
    </InfoLayout>
  );
};
