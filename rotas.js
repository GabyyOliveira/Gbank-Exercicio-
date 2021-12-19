//inspecionando o pacote de rotas do express
const rotas = require('express').Router()
const conexao = require('./config/conexao')

//rota para listar os dados do database
rotas.get('/', (req,res)=>{
    let sql = 'select * from tb_conta'
    conexao.query(sql, (erro,rows,fields)=>{
        if(erro)throw erro
        res.json(rows)
    })
})
//rota para mostrar apenas uma conta de acordo com o seu id
rotas.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = 'select * from tb_conta where id_transferencia = ?'
    conexao.query(sql, [id], (erro,rows,fields)=>{
        if(erro) throw erro
        res.json(rows[0])
    })
})
//rota para deletar uma conta especifica (atraves do seu id)
rotas.delete('/:id' , (req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_conta where id_transferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro) throw erro
        res.json({status:'conta excluida com sucesso'})
    })
})
//essa rota e para fazer uma inclusao de uma nova conta na tabela 
rotas.post('/', (req,res)=>{
    const {Cliente,valor, Conta} = req.body
    let sql = `insert into tb_conta(Cliente,valor, Conta) values('${Cliente}' , '${valor}', '${Conta}')`
    conexao.query(sql, (erro, rows, fields)=>{
        if(erro) throw erro
        res.json({status:'conta cadastrada com sucesso'})
    })
})
//rota para edição de uma conta (atraves do id)
rotas.put('/:id', (req,res)=>{
    const {id} = req.params
    const {Cliente,valor, Conta} = req.body
    let sql = `update tb_conta set 
               Cliente = '${Cliente}',
               valor = '${valor}',
               Conta = '${Conta}'
               where id_transferencia = '${id}'`
    conexao.query(sql,(erro, rows, fields)=>{
        if(erro)throw erro
        res.json({status: 'conta editada com sucesso'})
    })
                
})
module.exports = rotas 