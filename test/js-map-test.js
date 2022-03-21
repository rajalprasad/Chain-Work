const tabledata = [
    {
      "Pay_in_Eth": 1,
      "completed": false,
      "Job_Description": "test",
      "id": "1fcheQ4D8ORlyp6QJUjf"
    },
    {
      "completed": false,
      "Job_Description": "test",
      "Pay_in_Eth": "1",
      "id": "8T5xk6QU4I4AmdwYt5H1"
    },
    {
      "completed": false,
      "Job_Description": "test",
      "Pay_in_Eth": "1",
      "id": "FnkW3NJ9am59lDK3lsSA"
    },
    {
      "Pay_in_Eth": "10",
      "completed": false,
      "Job_Description": "hahah",
      "id": "RwVbOofV0mib7g5BTlyM"
    },
    {
      "completed": false,
      "Job_Description": "test",
      "Pay_in_Eth": "1",
      "id": "U7xqrvWJ1krBaH5wPRwQ"
    },
    {
      "Job_Description": "test",
      "completed": false,
      "Pay_in_Eth": "1",
      "id": "WbmljUpAfjuiUSfzHOWd"
    },
    {
      "completed": false,
      "Job_Description": "test",
      "Pay_in_Eth": "1",
      "id": "s1oefBzpfkyx7QCrvXAL"
    },
    {
      "Job_Description": "test555",
      "Pay_in_Eth": "1",
      "completed": false,
      "id": "vm3ocgVtvE82wxaWNvd6"
    },
    {
      "Pay_in_Eth": "1",
      "completed": false,
      "Job_Description": "test",
      "id": "xQamSusqZDyc7o6pzMtH"
    }
  ];

function Hello() {
    let x = tabledata.map((a) => {
        console.log(a.id);
        console.log(a.Job_Description);
        console.log(a.Pay_in_Eth);
        console.log(a.completed);
    })
}

Hello();
