import { useState } from 'react';
import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/send-email', formData);
      alert(response.data.success);
    } catch (error) {
      alert('Erro ao enviar o e-mail. Tente novamente mais tarde.');
    }

    setLoading(false);
  };

  return (
    <div className='bg-primary/30 lg:h-full'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-8'
          >
            Vamos nos <span className='text-accent'>conectar.</span>
          </motion.h2>
          
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='nome' placeholder='Nome' className='input' onChange={handleChange} required />
              <input type='email' name='email' placeholder='E-mail' className='input' onChange={handleChange} required />
            </div>
            <input type='text' name='assunto' placeholder='Assunto' className='input' onChange={handleChange} required />
            <textarea name='mensagem' placeholder='Mensagem' className='textarea' onChange={handleChange} required></textarea>
            <button 
              type='submit' 
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              disabled={loading}
            >
              <span className={`transition-all duration-500 ${loading ? 'opacity-0' : 'group-hover:-translate-y-[120%] group-hover:opacity-0'}`}>
                {loading ? 'Enviando...' : 'Vamos'}
              </span>
              {!loading && (
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
