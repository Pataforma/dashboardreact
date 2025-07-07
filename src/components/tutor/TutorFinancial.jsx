
import React, { useState } from 'react';

const TutorFinancial = () => {
  const [activeTab, setActiveTab] = useState('expenses');
  const [selectedPeriod, setSelectedPeriod] = useState('2024');

  const expenseData = [
    {
      id: 1,
      date: '2024-01-15',
      description: 'Routine Check-up - Max',
      provider: 'Dr. Silva - VetCare Clinic',
      category: 'Consultation',
      petName: 'Max',
      cost: 120.00,
      status: 'Paid'
    },
    {
      id: 2,
      date: '2024-01-10',
      description: 'Annual Vaccination Package - Luna',
      provider: 'Dr. Santos - PetHealth Clinic',
      category: 'Vaccination',
      petName: 'Luna',
      cost: 180.00,
      status: 'Paid'
    },
    {
      id: 3,
      date: '2023-12-28',
      description: 'Emergency Visit - Ear Infection Treatment',
      provider: 'Dr. Costa - Emergency Vet 24h',
      category: 'Emergency',
      petName: 'Luna',
      cost: 250.00,
      status: 'Paid'
    },
    {
      id: 4,
      date: '2023-12-15',
      description: 'Dental Cleaning - Max',
      provider: 'Dr. Silva - VetCare Clinic',
      category: 'Dental Care',
      petName: 'Max',
      cost: 320.00,
      status: 'Paid'
    },
    {
      id: 5,
      date: '2023-11-20',
      description: 'Prescription Medication - Antibiotics',
      provider: 'VetPharm - Veterinary Pharmacy',
      category: 'Medication',
      petName: 'Luna',
      cost: 85.00,
      status: 'Paid'
    },
    {
      id: 6,
      date: '2023-10-05',
      description: 'Blood Work Panel - Health Screening',
      provider: 'Dr. Oliveira - Pet Lab Services',
      category: 'Laboratory',
      petName: 'Max',
      cost: 150.00,
      status: 'Paid'
    }
  ];

  const categoryTotals = {
    'Consultation': 120.00,
    'Vaccination': 180.00,
    'Emergency': 250.00,
    'Dental Care': 320.00,
    'Medication': 85.00,
    'Laboratory': 150.00
  };

  const petTotals = {
    'Max': 590.00,
    'Luna': 515.00
  };

  const totalExpenses = expenseData.reduce((sum, expense) => sum + expense.cost, 0);

  const handleExportReport = () => {
    // Simulate report generation
    alert('Expense report exported successfully! Check your downloads folder.');
  };

  const renderExpenseTable = () => (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Provider</th>
            <th>Category</th>
            <th>Pet</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenseData.map(expense => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>
                <small className="text-muted">{expense.provider}</small>
              </td>
              <td>
                <span className={`badge ${
                  expense.category === 'Emergency' ? 'bg-danger' :
                  expense.category === 'Vaccination' ? 'bg-success' :
                  expense.category === 'Consultation' ? 'bg-primary' :
                  expense.category === 'Dental Care' ? 'badge-warning' :
                  'badge-info'
                }`}>
                  {expense.category}
                </span>
              </td>
              <td>
                <strong>{expense.petName}</strong>
              </td>
              <td>
                <strong className="text-primary">R$ {expense.cost.toFixed(2)}</strong>
              </td>
              <td>
                <span className="badge bg-success">{expense.status}</span>
              </td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-sm btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-eye me-2"></i>View Receipt
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-download me-2"></i>Download Invoice
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderSummaryCards = () => (
    <div className="row mb-4">
      <div className="col-md-3">
        <div className="card financial-overview-card text-white">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-0">R$ {totalExpenses.toFixed(2)}</h4>
                <small>Total Expenses ({selectedPeriod})</small>
              </div>
              <i className="bi bi-currency-dollar display-6 opacity-50"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-success text-white">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-0">R$ {(totalExpenses / 12).toFixed(2)}</h4>
                <small>Average Monthly</small>
              </div>
              <i className="bi bi-graph-up display-6 opacity-50"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-warning text-white">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-0">{expenseData.length}</h4>
                <small>Total Transactions</small>
              </div>
              <i className="bi bi-receipt display-6 opacity-50"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-info text-white">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="mb-0">2</h4>
                <small>Active Pets</small>
              </div>
              <i className="bi bi-heart-pulse display-6 opacity-50"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCategoryBreakdown = () => (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">
              <i className="bi bi-pie-chart me-2"></i>
              Expenses by Category
            </h6>
          </div>
          <div className="card-body">
            {Object.entries(categoryTotals).map(([category, amount]) => (
              <div key={category} className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <span className={`badge me-2 ${
                    category === 'Emergency' ? 'bg-danger' :
                    category === 'Vaccination' ? 'bg-success' :
                    category === 'Consultation' ? 'bg-primary' :
                    category === 'Dental Care' ? 'badge-warning' :
                    'badge-info'
                  }`}>
                    {category}
                  </span>
                </div>
                <div className="text-end">
                  <strong className="text-primary">R$ {amount.toFixed(2)}</strong>
                  <div className="progress mt-1" style={{ height: '5px', width: '100px' }}>
                    <div 
                      className="progress-bar" 
                      style={{ width: `${(amount / totalExpenses) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">
              <i className="bi bi-heart-pulse me-2"></i>
              Expenses by Pet
            </h6>
          </div>
          <div className="card-body">
            {Object.entries(petTotals).map(([petName, amount]) => (
              <div key={petName} className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <img 
                    src={petName === 'Max' ? 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=50&h=50&fit=crop' : 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=50&h=50&fit=crop'}
                    alt={petName}
                    className="rounded-circle me-2"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  />
                  <strong>{petName}</strong>
                </div>
                <div className="text-end">
                  <strong className="text-primary">R$ {amount.toFixed(2)}</strong>
                  <div className="progress mt-1" style={{ height: '5px', width: '100px' }}>
                    <div 
                      className="progress-bar bg-warning" 
                      style={{ width: `${(amount / totalExpenses) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">
            <i className="bi bi-credit-card me-2 text-primary"></i>
            Financial Overview
          </h2>
          <p className="text-muted mb-0">Track your pet care expenses and budget</p>
        </div>
        <div className="d-flex gap-2">
          <select 
            className="form-select"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            style={{ width: 'auto' }}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="all">All Time</option>
          </select>
          <button className="btn btn-primary" onClick={handleExportReport}>
            <i className="bi bi-download me-2"></i>
            Export Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      {renderSummaryCards()}

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'expenses' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('expenses'); }}
          >
            <i className="bi bi-receipt me-2"></i>
            Detailed Expenses
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'summary' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('summary'); }}
          >
            <i className="bi bi-pie-chart me-2"></i>
            Summary & Analytics
          </a>
        </li>
      </ul>

      {/* Content */}
      {activeTab === 'expenses' && (
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-0">
                <i className="bi bi-table me-2"></i>
                Expense History
              </h6>
              <small className="text-muted">
                Data sourced from veterinary records and receipts
              </small>
            </div>
          </div>
          <div className="card-body">
            <div className="alert alert-info">
              <i className="bi bi-info-circle me-2"></i>
              <strong>Connected Data:</strong> These expenses are generated from your veterinary appointments and services. All costs are automatically tracked from your participating veterinarians.
            </div>
            {renderExpenseTable()}
          </div>
        </div>
      )}

      {activeTab === 'summary' && (
        <div>
          {renderCategoryBreakdown()}
          
          <div className="row mt-4">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0">
                    <i className="bi bi-graph-up me-2"></i>
                    Monthly Expense Trend
                  </h6>
                </div>
                <div className="card-body">
                  <div className="chart-placeholder">
                    <i className="bi bi-bar-chart text-muted display-1"></i>
                    <h5 className="mt-3 text-muted">Monthly Expense Chart</h5>
                    <p className="text-muted">Interactive chart showing expense trends over time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0">
                    <i className="bi bi-piggy-bank me-2"></i>
                    Budget Recommendations
                  </h6>
                </div>
                <div className="card-body">
                  <div className="alert alert-success">
                    <strong>Suggested Monthly Budget:</strong> R$ 150,00
                    <br />
                    <small>Based on your historical spending pattern</small>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p className="mb-1"><strong>Emergency Fund</strong></p>
                      <p className="text-muted small">Recommended: R$ 500,00</p>
                    </div>
                    <div className="col-6">
                      <p className="mb-1"><strong>Annual Estimate</strong></p>
                      <p className="text-muted small">Based on trends: R$ 1,800,00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0">
                    <i className="bi bi-calendar-event me-2"></i>
                    Upcoming Expenses
                  </h6>
                </div>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between">
                      <div>
                        <strong>Annual Vaccination - Max</strong>
                        <br />
                        <small className="text-muted">Due: February 2024</small>
                      </div>
                      <span className="text-primary fw-bold">~R$ 180,00</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between">
                      <div>
                        <strong>Routine Check-up - Luna</strong>
                        <br />
                        <small className="text-muted">Due: March 2024</small>
                      </div>
                      <span className="text-primary fw-bold">~R$ 120,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorFinancial;
