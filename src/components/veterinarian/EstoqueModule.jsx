
import React, { useState } from 'react';

const EstoqueModule = () => {
  const [showAddItem, setShowAddItem] = useState(false);
  const [stockItems] = useState([
    {
      id: 1,
      name: 'Vacina Antirrábica',
      supplier: 'VetSupply Ltda',
      currentStock: 5,
      minLevel: 10,
      lastUpdate: '10/12/2024'
    },
    {
      id: 2,
      name: 'Seringas 5ml',
      supplier: 'MedEquip',
      currentStock: 45,
      minLevel: 20,
      lastUpdate: '12/12/2024'
    },
    {
      id: 3,
      name: 'Vacina V8',
      supplier: 'VetSupply Ltda',
      currentStock: 8,
      minLevel: 15,
      lastUpdate: '08/12/2024'
    }
  ]);

  const lowStockItems = stockItems.filter(item => item.currentStock <= item.minLevel);

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>
          <i className="bi bi-box-seam me-2 text-primary"></i>
          Estoque & Insumos
        </h4>
        <button 
          className="btn btn-primary"
          onClick={() => setShowAddItem(!showAddItem)}
        >
          <i className="bi bi-plus-circle me-2"></i>Novo Item
        </button>
      </div>

      {/* Alert for low stock */}
      {lowStockItems.length > 0 && (
        <div className="alert alert-warning mb-4">
          <i className="bi bi-exclamation-triangle me-2"></i>
          <strong>Atenção!</strong> Você tem {lowStockItems.length} item(ns) com estoque baixo.
        </div>
      )}

      {showAddItem && (
        <div className="card mb-4">
          <div className="card-header">
            <h6 className="mb-0">Adicionar Novo Item ao Estoque</h6>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Nome do Produto/Medicamento</label>
                  <input type="text" className="form-control" placeholder="Ex: Vacina V10" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Fornecedor</label>
                  <input type="text" className="form-control" placeholder="Nome do fornecedor" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Quantidade Inicial</label>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Nível Mínimo de Alerta</label>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Unidade</label>
                  <select className="form-select">
                    <option>Unidades</option>
                    <option>Caixas</option>
                    <option>Frascos</option>
                    <option>Kg</option>
                    <option>Litros</option>
                  </select>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddItem(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Adicionar ao Estoque
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Itens em Estoque</h6>
          <div className="d-flex gap-2">
            <select className="form-select form-select-sm">
              <option>Todos os itens</option>
              <option>Medicamentos</option>
              <option>Materiais</option>
              <option>Equipamentos</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Produto/Medicamento</th>
                  <th>Fornecedor</th>
                  <th>Estoque Atual</th>
                  <th>Nível Mínimo</th>
                  <th>Status</th>
                  <th>Última Atualização</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {stockItems.map(item => (
                  <tr key={item.id}>
                    <td><strong>{item.name}</strong></td>
                    <td>{item.supplier}</td>
                    <td>{item.currentStock}</td>
                    <td>{item.minLevel}</td>
                    <td>
                      {item.currentStock <= item.minLevel ? (
                        <span className="badge bg-warning">Estoque Baixo</span>
                      ) : (
                        <span className="badge bg-success">OK</span>
                      )}
                    </td>
                    <td>{item.lastUpdate}</td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-primary" title="Registrar Entrada">
                          <i className="bi bi-plus-circle"></i>
                        </button>
                        <button className="btn btn-outline-secondary" title="Registrar Saída">
                          <i className="bi bi-dash-circle"></i>
                        </button>
                        <button className="btn btn-outline-info" title="Editar">
                          <i className="bi bi-pencil"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-arrow-down-circle text-success" style={{ fontSize: '2rem' }}></i>
              <h6 className="mt-2">Registrar Entrada</h6>
              <p className="text-muted small">Adicionar itens ao estoque</p>
              <button className="btn btn-success btn-sm">
                <i className="bi bi-plus me-1"></i>Nova Entrada
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <i className="bi bi-arrow-up-circle text-warning" style={{ fontSize: '2rem' }}></i>
              <h6 className="mt-2">Registrar Saída</h6>
              <p className="text-muted small">Remover itens do estoque</p>
              <button className="btn btn-warning btn-sm">
                <i className="bi bi-dash me-1"></i>Nova Saída
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstoqueModule;
