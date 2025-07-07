
// Mock data for Pataforma dashboards

export const veterinarianData = {
  profile: {
    name: "Dr. Maria Silva",
    specialty: "Clínica Geral e Cirurgia",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
  },
  stats: {
    consultasAgendadas: 12,
    pendencias: 3,
    novasMensagens: 7
  },
  patients: [
    {
      id: 1,
      petName: "Thor",
      tutorName: "João Santos",
      lastVisit: "2024-01-15",
      status: "Saudável",
      species: "Cão",
      breed: "Golden Retriever"
    },
    {
      id: 2,
      petName: "Luna",
      tutorName: "Ana Costa",
      lastVisit: "2024-01-10",
      status: "Acompanhamento",
      species: "Gato",
      breed: "Siamês"
    },
    {
      id: 3,
      petName: "Rex",
      tutorName: "Carlos Lima",
      lastVisit: "2024-01-08",
      status: "Tratamento",
      species: "Cão",
      breed: "Pastor Alemão"
    }
  ]
};

export const tutorData = {
  profile: {
    name: "João Santos",
    pets: [
      {
        id: 1,
        name: "Thor",
        species: "Cão",
        breed: "Golden Retriever",
        photo: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200",
        age: "3 anos",
        healthStatus: "Vacinas em Dia",
        statusColor: "success",
        vaccines: [
          { name: "V10", date: "2023-12-15", status: "Aplicada" },
          { name: "Antirrábica", date: "2024-02-20", status: "Agendada" }
        ]
      },
      {
        id: 2,
        name: "Mia",
        species: "Gato",
        breed: "Persa",
        photo: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=200",
        age: "2 anos",
        healthStatus: "Vacina Pendente",
        statusColor: "warning",
        vaccines: [
          { name: "Tríplice Felina", date: "2024-01-30", status: "Pendente" }
        ]
      }
    ]
  },
  reminders: [
    { type: "Consulta", pet: "Thor", date: "2024-01-20", description: "Check-up anual" },
    { type: "Vacina", pet: "Mia", date: "2024-01-25", description: "Tríplice Felina" }
  ]
};

export const partnerData = {
  profile: {
    name: "ONG Amor Animal",
    stats: {
      petsForAdoption: 23,
      adoptionsThisMonth: 8,
      activeEvents: 3
    }
  },
  pets: [
    {
      id: 1,
      name: "Buddy",
      species: "Cão",
      age: "2 anos",
      size: "Médio",
      photo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200",
      status: "Disponível",
      statusColor: "success"
    },
    {
      id: 2,
      name: "Whiskers",
      species: "Gato",
      age: "1 ano",
      size: "Pequeno",
      photo: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=200",
      status: "Em Processo",
      statusColor: "warning"
    },
    {
      id: 3,
      name: "Max",
      species: "Cão",
      age: "4 anos",
      size: "Grande",
      photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=200",
      status: "Disponível",
      statusColor: "success"
    }
  ],
  events: [
    { id: 1, name: "Feira de Adoção", date: "2024-01-25", engagement: "150 interessados" },
    { id: 2, name: "Campanha de Castração", date: "2024-02-10", engagement: "89 inscrições" }
  ]
};

export const advertiserData = {
  profile: {
    name: "Carlos Events"
  },
  events: [
    {
      id: 1,
      title: "Pet Show 2024",
      date: "2024-02-15",
      status: "Publicado",
      views: 1250,
      registrations: 87
    },
    {
      id: 2,
      title: "Workshop de Adestramento",
      date: "2024-01-30",
      status: "Rascunho",
      views: 0,
      registrations: 0
    },
    {
      id: 3,
      title: "Expo Veterinária",
      date: "2024-03-05",
      status: "Publicado",
      views: 980,
      registrations: 156
    }
  ]
};
