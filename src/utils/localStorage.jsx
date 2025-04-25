const employees = [
  {
    id: 1,
    name: "Sita",
    email: "employee1@example.com",
    password: "12345",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Submit Report",
        description: "Compile and submit the weekly status report.",
        date: "2025-04-25",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the project sync-up meeting.",
        date: "2025-04-26",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Bugs",
        description: "Resolve bugs assigned in the bug tracker.",
        date: "2025-04-22",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Feedback",
        description: "Review and implement client feedback.",
        date: "2025-04-23",
        category: "Client Work",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    name: "Ram",
    email: "employee2@example.com",
    password: "12345",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Logo",
        description: "Create a new logo design for the marketing team.",
        date: "2025-04-20",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Website",
        description: "Apply UI updates to the company homepage.",
        date: "2025-04-24",
        category: "Web",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Social Media Strategy",
        description: "Draft a plan for next month’s social media content.",
        date: "2025-04-27",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    name: "Bina",
    email: "employee3@example.com",
    password: "12345",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Deploy App",
        description: "Push the new version of the app to production.",
        date: "2025-04-25",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests from the team.",
        date: "2025-04-23",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Document API",
        description: "Write detailed documentation for the REST API.",
        date: "2025-04-22",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Security Audit",
        description: "Perform a security audit of all endpoints.",
        date: "2025-04-26",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    name: "Kiran",
    email: "employee4@example.com",
    password: "12345",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Monthly Report",
        description: "Compile financial reports for April.",
        date: "2025-04-30",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Training Session",
        description: "Host a training on company tools for new hires.",
        date: "2025-04-28",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update Policies",
        description: "Revise internal policies for compliance.",
        date: "2025-04-21",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Missed Deadline",
        description: "Task failed due to delayed inputs from the team.",
        date: "2025-04-19",
        category: "Operations",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    name: "Nabin",
    email: "employee5@example.com",
    password: "12345",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Client Demo",
        description: "Prepare for the client product demonstration.",
        date: "2025-04-26",
        category: "Client Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "UI Improvements",
        description: "Enhance user interface for dashboard page.",
        date: "2025-04-24",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Submit Survey",
        description: "Fill in and submit the employee satisfaction survey.",
        date: "2025-04-22",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Santosh",
    email: "admin@example.com",
    password: "12345"
  }
];


  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }