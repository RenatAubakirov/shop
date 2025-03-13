const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arenat98@gmail.com', 
    pass: 'your-app-password' // Используй App Password, а не обычный пароль
  }
});

app.post('/order', async (req, res) => {
  const { customer, cartItems } = req.body;

  const itemsList = cartItems.map(
    (item) => `${item.name} - ${item.size}, Количество: ${item.quantity}`
  ).join('\n');

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'arenat98@gmail.com',
    subject: 'Новый заказ',
    text: `Имя: ${customer.name}\nТелефон: ${customer.phone}\nEmail: ${customer.email}\n\nТовары:\n${itemsList}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
