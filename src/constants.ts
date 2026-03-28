import { Dish, Order } from './types';

export const DISHES: Dish[] = [
  {
    id: '1',
    name: 'Midnight Wagyu',
    price: 42.00,
    description: 'Midnight-glazed black cod with charcoal-infused cauliflower silk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBW4JMNtrXk4vnCR_CdjN0HhuMXTfZPwQw6oGn2K3BvqdcuWuRdNd3QL2rAFf32fp1A1R9Oi1FIi7AbYTjH6Vk-4B9UqAhDPowZfXd7_XemYfEduA4_OnWQZjgw9iZdk3oWxi2hAWGPZTIs4PuefnfaB5PLrnCQqE3lULRsPfC1VABoVuEgOlIugJVYG97Tk_2WUtdxferBjtCz8gMwpd8xiC-fjjA23Hc5MuOe8FEUZMAZjjYPecTfszVitnCiscKDiYFt6_PM3hA',
    category: 'Main Courses',
    tags: ['Premium'],
    ordersToday: 42
  },
  {
    id: '2',
    name: 'Neon Sashimi',
    price: 24.00,
    description: 'Premium grade salmon with citrus yuzu pearls and edible neon flora.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2jxC1ibmJrUf7mGlJOzVKl1PfS85e_xFg295zFtSBqVvT1rW48U8egQmECPUyETW_gcuR_eNzwteVXXtgD91X9NDXW6u-HrozxAWdWAj7iuT477aOto1Q2f7WUerK6hECtpCTcmjV3bWSwFk7k7qANagJe0WBsEXt4Ovq9GYeQ9ZFBNBqDWs-6ggmf0DPfjEc-xILtMJyta2nL88eSROyIJRymsMMo8RmGexK0Pdg0dcRxS0wEIKCyvc-Fhns3tBTnGhpGdwnhYPs',
    category: 'Appetizers',
    tags: ['Raw', "Chef's Choice"],
    ordersToday: 38
  },
  {
    id: '3',
    name: 'Cyber Garden Bowl',
    price: 31.00,
    description: 'Artistic plant-based bowl with glowing green herbs and dark balsamic glaze.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVCLkQbki4Dctg7EpATIIv-t5rWiqUzclb2Rq_arWJ6T_S0CUECIvuSq4UOggmc6XoU1XTCsh2izysg_RglzaqmGnmXN_uETTOWlbBnNxto51ecF94jTJpBe-UScTAbXNJpkGN-EftmzyKZS-tPRyotnIArJAW4vAGz4lRsu8n8arYjqK49qGrDCfRFw3ajQnzE9mAc-nSBdzWUPKmg8HWHsLZVHgI2FFDzVmrHkTqgnkVnxfCFEl8NsFk9WzGCCdr9GZaWxX60DlP',
    category: 'Main Courses',
    tags: ['Vegan'],
    ordersToday: 31
  },
  {
    id: '4',
    name: 'Truffle Arancini',
    price: 18.00,
    description: 'Crispy risotto balls infused with black truffle oil and parmesan heart.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0bYzKEa-bFNqytBAbnh45Wzqx45b8T6fXZMqUEobk_5GPlxSzgbDF_be6StzMYAb-MwWf4osAYj6qJAY6X8e0p_4GpLkcnwWxNFfDdyjkPD7wgmku8ZWo2RUWZsp8s11o-1_RdKzMLKiqddD-sgH9QeFCRMwSB_klwEp_qbepKY_A4UoV4t7M3VJskQs4o6JS0MY9MFGMus08-2abUeE4gvmJoKxVyplyMe9LX5NwNB4L5PKj1sffHtweDpyxVIJ09xeZ5ns6-V67',
    category: 'Appetizers',
    tags: ['Vegan', 'Gluten Free'],
    isBestSeller: true
  },
  {
    id: '5',
    name: 'Glacier Cod',
    price: 42.00,
    description: 'Miso-glazed black cod with charcoal-infused cauliflower silk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgQv-ObIt5-DOQePxSbGFusQVYsom93fFor3gcvYaI8Hwb4wtaztRIRKBu7q2EV-kTYDVpNEfLb1ay2wJHzA5qfnlaQRCspYlGmLbQDnjsbVvP1H6poSYrbfCv_lmpbUS9wmtq8Xzh_04uJW1t7IVVD0TwQqAtZOL7CcNkNhc9zhEpK-d5l4jI2H4pNkkQnf2R5m3JwACbm2W5lTipO7q9XP_hlc9uCHAX6wWs3JDw7S2V1NUVV3TOpq4kEwb01u0xqd_kKpp3Aw9x',
    category: 'Main Courses',
    tags: ['Seafood']
  },
  {
    id: '6',
    name: 'Obsidian Ribeye',
    price: 58.00,
    description: 'Aged prime ribeye finished with volcanic salt and smoked butter.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaGS1hSBSy_omkGcaHoqf1TSpCa8Ty6qQ0preJxQs5PjpOnXHNsMbFNEoQPoeS2L1uzyQO2RRFQzkYsEc8TJadAyCP1GTMNmvM817buNAWgpMvetBqv2JzNwJ2zVu7ffyBf3EsFXA4nzrg8GgrrKEky0qW7brE57pOS_mmR-PrabdF9ymedhcWDFF9s7dr7B7ug4L6Hak5HMWB1Cjm8SNshz4bWNXjds4MJc1kUpRSsK86FIoRY6-r2YgVy5bBVB5wyZ-exdAzzqZ5',
    category: 'Main Courses',
    tags: ['Premium']
  },
  {
    id: '7',
    name: 'Seared Scallops',
    price: 28.00,
    description: 'Hokkaido scallops, parsnip silk, smoked pancetta dust, and lemon-infused brown butter.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoqbTo-gNTkDoSlvmn3HRlDgfSrWYMb2AT9fL4XmxuCN1bnjmNm7MZoJ_W14sMLdyouvyEjrwpB0SIggD8xqYQFE8w5kUl2PM8Ng9NIfrpnI_kKkFJ1wixVdAbfUoaDlOJRBAtH_UKEDGFjc5YeDhjcoOR7jS6yv74ntclvjTz0ZpaE-t5b57zKFhokKssxvaDsZrvXb1K4QxfyhYMGEYSgt4m4D7XSM8Cl8G-se49gs5H8aVOujPzE7iNu8zXO901TOEmLuvYWRCf',
    category: 'Appetizers',
    tags: ["Chef's Choice"]
  },
  {
    id: '8',
    name: 'Truffle Carpaccio',
    price: 34.00,
    description: 'Hand-cut Wagyu beef, shaved Perigord black truffle, and aged parmesan foam.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEZjK_7w1B-3bde8PNvvm8_V6Yor7I_5yFqAKdDCEuIQmK1Fdo4YiDE9-QfGdBRBvivMNvBsU_9SYUhQ4hn56Id8oof-QPq-OkJc-tBJ3Nbd3sxK4Kg6xISHsjVMn9lc6Emi5EZeT0WgJ5K_FRGTZLF8ceLs9RzkrfkpIOZPZajyavGcwSXNVC6dZtDcvtFBVoy3NEjaL9Sweuip5UpXwKddLtrnpjCfy2dIDK0TC2_bu20uL1eBWjaKZDfJQqjdf61FroQldaeF-r',
    category: 'Appetizers',
    tags: ['Signature']
  }
];

export const ORDERS: Order[] = [
  { id: '#NOCT-8821', guest: 'Julian S.', status: 'PREPARING', amount: 142.00, items: '2x Wagyu Sliders, 1x Truffle Fries', time: '12:45 PM Today' },
  { id: '#NOCT-8820', guest: 'Marcus V.', status: 'DELIVERED', amount: 84.50, items: '1x Neon Sashimi, 1x Cyber Sling', time: '11:15 AM Today' },
  { id: '#NOCT-8819', guest: 'Elena K.', status: 'PENDING', amount: 210.15, items: '4x Cyber Sushi Platter', time: '10:30 AM Today' },
  { id: '#NOCT-8818', guest: 'Derrick L.', status: 'DELIVERED', amount: 56.00, items: '2x Truffle Arancini', time: '09:45 AM Today' },
  { id: '#NOCT-8817', guest: 'Sophia R.', status: 'PREPARING', amount: 124.80, items: '1x Glacier Cod, 1x Eclipse Sphere', time: '09:15 AM Today' }
];
