<template>
    <div class="dashboard">
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">EduTrack</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Classes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Assignments</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Quizzes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Calendar</a>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <div class="text-white me-3">Welcome, Ms. Johnson</div>
              <div class="dropdown">
                <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                  <i class="bi bi-person-circle me-1"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
  
      <div class="container-fluid">
        <div class="row">
          <!-- Sidebar -->
          <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <i class="bi bi-house-door me-2"></i>
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-people me-2"></i>
                    Students
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-book me-2"></i>
                    Classes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-file-text me-2"></i>
                    Assignments
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-question-circle me-2"></i>
                    Quizzes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-graph-up me-2"></i>
                    Analytics
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-calendar-event me-2"></i>
                    Calendar
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-chat-left-text me-2"></i>
                    Messages
                  </a>
                </li>
              </ul>
  
              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Your Classes</span>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-circle-fill me-2 text-primary" style="font-size: 0.5rem;"></i>
                    Biology 101
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-circle-fill me-2 text-success" style="font-size: 0.5rem;"></i>
                    Chemistry 202
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-circle-fill me-2 text-danger" style="font-size: 0.5rem;"></i>
                    Physics 303
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-circle-fill me-2 text-warning" style="font-size: 0.5rem;"></i>
                    Environmental Science
                  </a>
                </li>
              </ul>
            </div>
          </nav>
  
          <!-- Main content -->
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <i class="bi bi-calendar3"></i>
                  This Week
                </button>
              </div>
            </div>
  
            <!-- Overview Cards -->
            <div class="row mb-4">
              <div class="col-md-3 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Students</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">127</div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-people fs-2 text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-md-3 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Class Average</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">83.4%</div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-graph-up fs-2 text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-md-3 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                          Pending Assignments</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">24</div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-clipboard-check fs-2 text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-md-3 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Upcoming Quizzes</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">3</div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-journal-check fs-2 text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Class Performance Chart -->
            <div class="row mb-4">
              <div class="col-md-8">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Class Performance</h6>
                    <div class="dropdown no-arrow">
                      <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Biology 101</a>
                        <a class="dropdown-item" href="#">Chemistry 202</a>
                        <a class="dropdown-item" href="#">Physics 303</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">All Classes</a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="chart-area">
                      <canvas ref="classPerformanceChart" height="320"></canvas>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-md-4">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Assignment Completion</h6>
                  </div>
                  <div class="card-body">
                    <div class="chart-pie pt-4 pb-2">
                      <canvas ref="assignmentCompletionChart" height="245"></canvas>
                    </div>
                    <div class="mt-4 text-center small">
                      <span class="me-2">
                        <i class="bi bi-circle-fill text-primary"></i> Submitted
                      </span>
                      <span class="me-2">
                        <i class="bi bi-circle-fill text-success"></i> Graded
                      </span>
                      <span class="me-2">
                        <i class="bi bi-circle-fill text-danger"></i> Late
                      </span>
                      <span class="me-2">
                        <i class="bi bi-circle-fill text-warning"></i> Missing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Recent Activity and Student Progress -->
            <div class="row">
              <div class="col-md-6">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Recent Activity</h6>
                  </div>
                  <div class="card-body">
                    <div class="list-group">
                      <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                          <h6 class="mb-1">Quiz: Cell Biology submitted</h6>
                          <small>3 hours ago</small>
                        </div>
                        <p class="mb-1">23 students completed the quiz with an average score of 78%.</p>
                        <small>Biology 101</small>
                      </a>
                      <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                          <h6 class="mb-1">Assignment: Lab Report due</h6>
                          <small>Yesterday</small>
                        </div>
                        <p class="mb-1">18 out of 32 students have submitted their lab reports.</p>
                        <small>Chemistry 202</small>
                      </a>
                      <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                          <h6 class="mb-1">New student added to class</h6>
                          <small>2 days ago</small>
                        </div>
                        <p class="mb-1">Emma Thompson has been added to Physics 303.</p>
                        <small>Physics 303</small>
                      </a>
                      <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                          <h6 class="mb-1">Midterm Grades Posted</h6>
                          <small>1 week ago</small>
                        </div>
                        <p class="mb-1">Midterm grades for Environmental Science have been posted.</p>
                        <small>Environmental Science</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-md-6">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Student Progress</h6>
                    <div class="dropdown no-arrow">
                      <button class="btn btn-link btn-sm dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">View All</a>
                        <a class="dropdown-item" href="#">Sort by Name</a>
                        <a class="dropdown-item" href="#">Sort by Grade</a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>Student</th>
                            <th>Class</th>
                            <th>Grade</th>
                            <th>Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John Smith</td>
                            <td>Biology 101</td>
                            <td>92%</td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 92%" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Sarah Johnson</td>
                            <td>Chemistry 202</td>
                            <td>87%</td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 87%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Michael Brown</td>
                            <td>Physics 303</td>
                            <td>78%</td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 78%" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Emily Davis</td>
                            <td>Biology 101</td>
                            <td>95%</td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>David Wilson</td>
                            <td>Environmental Science</td>
                            <td>65%</td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Upcoming Assignments -->
            <div class="row">
              <div class="col-12">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Upcoming Assignments & Quizzes</h6>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Class</th>
                            <th>Type</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Photosynthesis Lab Report</td>
                            <td>Biology 101</td>
                            <td>Assignment</td>
                            <td>May 15, 2023</td>
                            <td><span class="badge bg-warning">Upcoming</span></td>
                            <td>
                              <button class="btn btn-sm btn-primary">Edit</button>
                              <button class="btn btn-sm btn-danger ms-1">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <td>Chemical Reactions Quiz</td>
                            <td>Chemistry 202</td>
                            <td>Quiz</td>
                            <td>May 18, 2023</td>
                            <td><span class="badge bg-warning">Upcoming</span></td>
                            <td>
                              <button class="btn btn-sm btn-primary">Edit</button>
                              <button class="btn btn-sm btn-danger ms-1">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <td>Newton's Laws Problem Set</td>
                            <td>Physics 303</td>
                            <td>Assignment</td>
                            <td>May 20, 2023</td>
                            <td><span class="badge bg-warning">Upcoming</span></td>
                            <td>
                              <button class="btn btn-sm btn-primary">Edit</button>
                              <button class="btn btn-sm btn-danger ms-1">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <td>Ecosystem Analysis</td>
                            <td>Environmental Science</td>
                            <td>Project</td>
                            <td>May 25, 2023</td>
                            <td><span class="badge bg-info">In Progress</span></td>
                            <td>
                              <button class="btn btn-sm btn-primary">Edit</button>
                              <button class="btn btn-sm btn-danger ms-1">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <td>Final Exam Review</td>
                            <td>Biology 101</td>
                            <td>Study Guide</td>
                            <td>June 1, 2023</td>
                            <td><span class="badge bg-secondary">Draft</span></td>
                            <td>
                              <button class="btn btn-sm btn-primary">Edit</button>
                              <button class="btn btn-sm btn-danger ms-1">Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'TeacherDashboard',
    setup() {
      const classPerformanceChart = ref(null);
      const assignmentCompletionChart = ref(null);
  
      onMounted(() => {
        // Class Performance Line Chart
        if (classPerformanceChart.value) {
          new Chart(classPerformanceChart.value, {
            type: 'line',
            data: {
              labels: ['January', 'February', 'March', 'April', 'May'],
              datasets: [
                {
                  label: 'Biology 101',
                  data: [78, 81, 80, 85, 83],
                  borderColor: 'rgba(78, 115, 223, 1)',
                  backgroundColor: 'rgba(78, 115, 223, 0.05)',
                  pointRadius: 3,
                  pointBackgroundColor: 'rgba(78, 115, 223, 1)',
                  pointBorderColor: 'rgba(78, 115, 223, 1)',
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
                  pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
                  pointHitRadius: 10,
                  pointBorderWidth: 2,
                  tension: 0.3,
                  fill: true
                },
                {
                  label: 'Chemistry 202',
                  data: [75, 78, 82, 79, 85],
                  borderColor: 'rgba(28, 200, 138, 1)',
                  backgroundColor: 'rgba(28, 200, 138, 0.05)',
                  pointRadius: 3,
                  pointBackgroundColor: 'rgba(28, 200, 138, 1)',
                  pointBorderColor: 'rgba(28, 200, 138, 1)',
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(28, 200, 138, 1)',
                  pointHoverBorderColor: 'rgba(28, 200, 138, 1)',
                  pointHitRadius: 10,
                  pointBorderWidth: 2,
                  tension: 0.3,
                  fill: true
                },
                {
                  label: 'Physics 303',
                  data: [70, 72, 75, 81, 78],
                  borderColor: 'rgba(246, 194, 62, 1)',
                  backgroundColor: 'rgba(246, 194, 62, 0.05)',
                  pointRadius: 3,
                  pointBackgroundColor: 'rgba(246, 194, 62, 1)',
                  pointBorderColor: 'rgba(246, 194, 62, 1)',
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(246, 194, 62, 1)',
                  pointHoverBorderColor: 'rgba(246, 194, 62, 1)',
                  pointHitRadius: 10,
                  pointBorderWidth: 2,
                  tension: 0.3,
                  fill: true
                }
              ]
            },
            options: {
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'bottom'
                }
              },
              scales: {
                y: {
                  min: 50,
                  max: 100,
                  ticks: {
                    callback: function(value) {
                      return value + '%';
                    }
                  }
                }
              }
            }
          });
        }
  
        // Assignment Completion Pie Chart
        if (assignmentCompletionChart.value) {
          new Chart(assignmentCompletionChart.value, {
            type: 'doughnut',
            data: {
              labels: ['Submitted', 'Graded', 'Late', 'Missing'],
              datasets: [{
                data: [55, 30, 10, 5],
                backgroundColor: ['#4e73df', '#1cc88a', '#e74a3b', '#f6c23e'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#e02d1b', '#f4b619'],
                hoverBorderColor: 'rgba(234, 236, 244, 1)',
              }],
            },
            options: {
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              cutout: '70%'
            }
          });
        }
      });
  
      return {
        classPerformanceChart,
        assignmentCompletionChart
      };
    }
  };
  </script>
  
  <style>
  @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
  @import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
  
  .dashboard {
    padding-top: 56px;
  }
  
  .sidebar {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }
  
  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
    padding: 0.5rem 1rem;
  }
  
  .sidebar .nav-link.active {
    color: #007bff;
  }
  
  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
  
  .border-left-primary {
    border-left: 0.25rem solid #4e73df !important;
  }
  
  .border-left-success {
    border-left: 0.25rem solid #1cc88a !important;
  }
  
  .border-left-info {
    border-left: 0.25rem solid #36b9cc !important;
  }
  
  .border-left-warning {
    border-left: 0.25rem solid #f6c23e !important;
  }
  
  @media (max-width: 767.98px) {
    .sidebar {
      top: 5rem;
    }
  }
  
  main {
    margin-top: 56px;
  }
  
  .chart-area {
    position: relative;
    height: 100%;
    width: 100%;
  }
  
  .chart-pie {
    position: relative;
    height: 100%;
    width: 100%;
  }
  </style>