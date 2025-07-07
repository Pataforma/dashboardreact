
import React, { useState } from 'react';

const FinanceiroModule = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddExpense, setShowAddExpense] = useState(false);

  const renderOverview = () => (
    <div className="row">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header">
            <h6 className="mb-0">Faturamento vs. Custos (2024)</h6>
          </div>
          <div className="card-body">
            <div className="chart-placeholder bg-light rounded p-4 text-center">
              <i className="bi bi-bar-chart text-muted" style={{ fontSize: '3rem' }}></i>
              <p className="text-muted mt-2">Gráfico de Receitas vs Despesas</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">Serviços Mais Rentáveis</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Serviço</th>
                    <th>Qtd. Realizadas</th>
                    <th>Receita Total</th>
                    <th>Ticket Médio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Consulta Geral</td>
                    <td>45</td>
                    <td>R$ 2.250,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>Cirurgia</td>
                    <td>8</td>
                    <td>R$ 2.400,00</td>
                    <td>R$ 300,00</td>
                  </tr>
                  <tr>
                    <td>Vacinação</td>
                    <td>32</td>
                    <td>R$ 960,00</td>
                    <td>R$ 30,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body text-center">
            <h3 className="text-success">R$ 8.450,00</h3>
            <p className="text-muted mb-0">Receita do Mês</p>
          </div>
        </div>
        
        <div className="card mb-3">
          <div className="card-body text-center">
            <h3 className="text-warning">R$ 2.180,00</h3>
            <p className="text-muted mb-0">Despesas do Mês</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body text-center">
            <h3 className="text-primary">R$ 6.270,00</h3>
            <p className="text-muted mb-0">Lucro Líquido</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReceitas = () => (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Receitas Detalhadas</h6>
        <div className="d-flex gap-2">
          <select className="form-select form-select-sm">
            <option>Últimos 30 dias</option>
            <option>Últimos 3 meses</option>
            <option>Este ano</option>
          </select>
          <button className="btn btn-sm btn-outline-primary">
            <i className="bi bi-download me-1"></i>Exportar CSV
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Cliente (Tutor)</th>
                <th>Pet</th>
                <th>Serviço Prestado</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15/12/2024</td>
                <td>Maria Silva</td>
                <td>Rex</td>
                <td>Consulta + Vacinação</td>
                <td>R$ 80,00</td>
                <td><span className="badge bg-success">Pago</span></td>
              </tr>
              <tr>
                <td>14/12/2024</td>
                <td>João Santos</td>
                <td>Luna</td>
                <td>Cirurgia</td>
                <td>R$ 350,00</td>
                <td><span className="badge bg-warning">Pendente</span></td>
              </tr>
              <tr>
                <td>13/12/2024</td>
                <td>Ana Costa</td>
                <td>Mel</td>
                <td>Consulta Geral</td>
                <td>R$ 50,00</td>
                <td><span className="badge bg-success">Pago</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderDespesas = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">Gestão de Despesas</h6>
        <button 
          className="btn btn-primary"
          onClick={() => setShowAddExpense(!showAddExpense)}
        >
          <i className="bi bi-plus-circle me-2"></i>Nova Despesa
        </button>
      </div>

      {showAddExpense && (
        <div className="card mb-4">
          <div className="card-header">
            <h6 className="mb-0">Registrar Nova Despesa</h6>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Data</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Tipo de Custo</label>
                  <select className="form-select">
                    <option>Selecione...</option>
                    <option>Insumos</option>
                    <option>Material de Escritório</option>
                    <option>Aluguel</option>
                    <option>Marketing</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Fornecedor</label>
                  <input type="text" className="form-control" placeholder="Nome do fornecedor" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Valor</label>
                  <input type="number" className="form-control" placeholder="0,00" step="0.01" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea className="form-control" rows="2" placeholder="Descreva a despesa..."></textarea>
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddExpense(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Salvar Despesa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                  <th>Fornecedor</th>
                  <th>Valor</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10/12/2024</td>
                  <td><span className="badge bg-info">Insumos</span></td>
                  <td>Vacinas para estoque</td>
                  <td>VetSupply Ltda</td>
                  <td>R$ 450,00</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-pencil"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>05/12/2024</td>
                  <td><span className="badge bg-secondary">Aluguel</span></td>
                  <td>Aluguel da clínica</td>
                  <td>Imobiliária Silva</td>
                  <td>R$ 1.200,00</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-pencil"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>
          <i className="bi bi-graph-up me-2 text-primary"></i>
          Gestão Financeira
        </h4>
      </div>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('overview'); }}
          >
            <i className="bi bi-speedometer2 me-2"></i>Visão Geral
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'receitas' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('receitas'); }}
          >
            <i className="bi bi-cash-coin me-2"></i>Receitas
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={`nav-link ${activeTab === 'despesas' ? 'active' : ''}`}
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveTab('despesas'); }}
          >
            <i className="bi bi-receipt me-2"></i>Despesas
          </a>
        </li>
      </ul>

      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'receitas' && renderReceitas()}
      {activeTab === 'despesas' && renderDespesas()}
    </div>
  );
};

export default FinanceiroModule;
