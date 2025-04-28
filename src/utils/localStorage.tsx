const admin = {
  "id": 0,
  "name": "Aarav Sharma",
  "email": "admin@company.com",
  "password": "123",
  "taskStats": {
      "totalTasks": 0,
      "active": 0,
      "new": 0,
      "completed": 0,
      "failed": 0
  }
}

const employees = [
  {
      "id": 1,
      "name": "Rohan Patel",
      "email": "rohan.dev@company.com",
      "password": "123",
      "taskStats": {
          "totalTasks": 3,
          "active": 2,
          "new": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "taskNumber": "DEV-101",
              "id": 101,
              "title": "Implement user authentication",
              "description": "Create login system with JWT tokens",
              "date": "2023-06-15",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "FRONT-102",
              "id": 102,
              "title": "Fix mobile responsiveness",
              "description": "Adjust CSS for mobile devices",
              "date": "2023-06-10",
              "category": "Frontend",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "BACK-103",
              "id": 103,
              "title": "Database optimization",
              "description": "Optimize SQL queries for performance",
              "date": "2023-06-20",
              "category": "Backend",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ]
  },
  {
      "id": 2,
      "name": "Priya Gupta",
      "email": "priya.design@company.com",
      "password": "123",
      "taskStats": {
          "totalTasks": 4,
          "active": 3,
          "new": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "taskNumber": "UI-201",
              "id": 201,
              "title": "Design landing page",
              "description": "Create Figma mockups for new campaign",
              "date": "2023-06-12",
              "category": "UI/UX",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "DESIGN-202",
              "id": 202,
              "title": "Create app icons",
              "description": "Design icons for mobile application",
              "date": "2023-06-18",
              "category": "Graphic Design",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "STYLE-203",
              "id": 203,
              "title": "Style guide update",
              "description": "Update color palette in design system",
              "date": "2023-06-05",
              "category": "UI/UX",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskNumber": "PROTO-204",
              "id": 204,
              "title": "Prototype user flow",
              "description": "Create interactive prototype for checkout",
              "date": "2023-06-22",
              "category": "Prototyping",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 3,
      "name": "Arjun Singh",
      "email": "arjun.marketing@company.com",
      "password": "123",
      "taskStats": {
          "totalTasks": 5,
          "active": 4,
          "new": 1,
          "completed": 1,
          "failed": 1
      },
      "tasks": [
          {
              "taskNumber": "MKT-301",
              "id": 301,
              "title": "Social media campaign",
              "description": "Plan Q3 social media content",
              "date": "2023-06-14",
              "category": "Marketing",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "SEO-302",
              "id": 302,
              "title": "SEO optimization",
              "description": "Improve meta tags for main pages",
              "date": "2023-06-08",
              "category": "Digital Marketing",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskNumber": "EMAIL-303",
              "id": 303,
              "title": "Email newsletter",
              "description": "Design June newsletter template",
              "date": "2023-06-25",
              "category": "Content",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "ADS-304",
              "id": 304,
              "title": "Ad performance analysis",
              "description": "Review Google Ads metrics",
              "date": "2023-06-17",
              "category": "Analytics",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": true
          },
          {
              "taskNumber": "INFL-305",
              "id": 305,
              "title": "Influencer outreach",
              "description": "Contact potential brand ambassadors",
              "date": "2023-06-30",
              "category": "Partnerships",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 4,
      "name": "Ananya Reddy",
      "email": "ananya.hr@company.com",
      "password": "123",
      "taskStats": {
          "totalTasks": 3,
          "active": 2,
          "new": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "taskNumber": "HR-401",
              "id": 401,
              "title": "Onboard new hires",
              "description": "Complete paperwork for 3 new employees",
              "date": "2023-06-09",
              "category": "Recruitment",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskNumber": "TEAM-402",
              "id": 402,
              "title": "Schedule team building",
              "description": "Organize quarterly team event",
              "date": "2023-06-28",
              "category": "Employee Engagement",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "POLICY-403",
              "id": 403,
              "title": "Update employee handbook",
              "description": "Add new remote work policies",
              "date": "2023-06-19",
              "category": "Policy",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 5,
      "name": "Vikram Joshi",
      "email": "vikram.sales@company.com",
      "password": "123",
      "taskStats": {
          "totalTasks": 5,
          "active": 3,
          "new": 1,
          "completed": 1,
          "failed": 1
      },
      "tasks": [
          {
              "taskNumber": "SALE-501",
              "id": 501,
              "title": "Client presentation",
              "description": "Prepare slides for Acme Corp pitch",
              "date": "2023-06-13",
              "category": "Sales",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "REPORT-502",
              "id": 502,
              "title": "Quarterly targets review",
              "description": "Analyze Q2 sales performance",
              "date": "2023-06-07",
              "category": "Reporting",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "taskNumber": "CRM-503",
              "id": 503,
              "title": "CRM data cleanup",
              "description": "Remove duplicate contacts",
              "date": "2023-06-21",
              "category": "Data Management",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": true
          },
          {
              "taskNumber": "TRAIN-504",
              "id": 504,
              "title": "New product training",
              "description": "Learn features of new product line",
              "date": "2023-06-26",
              "category": "Training",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "taskNumber": "FEED-505",
              "id": 505,
              "title": "Client feedback session",
              "description": "Conduct survey with key accounts",
              "date": "2023-06-16",
              "category": "Customer Success",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  }
]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export function getLocalStorage(): { employees: any; admin: any } {
const employees = JSON.parse(localStorage.getItem("employees") || "null");
const admin = JSON.parse(localStorage.getItem("admin") || "null");
return { employees, admin };
}