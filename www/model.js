var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var core_use = require('cors');
var pg = require('pg');

app.use(core_use());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'JornadaMotorista', //env var: PGDATABASE
  password: 'root', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

// rotas
app.post('/insereRota', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
    console.log("entrou");
	  client.query('insert into tb_rotas (origem, destino, duracao, tempo) values (' + '\'' + req.body.origem[0] + '\'' + ','
	  																							+ '\'' + req.body.destino[0] + '\'' + ','
	  																							+ '\'' + req.body.duracao + '\'' + ','
	  																							+ '\'' + req.body.tempo + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});


	// expedição
	app.post('/insere/expedicao', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_expediente (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});

	// fiscalização
	app.post('/insere/fiscalizacao', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_fiscalizacao (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});

	// abastecimento
	app.post('/insere/abastecimento', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_abastecimento (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});

	// manutencao
	app.post('/insere/manutencao', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_manutencao (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});

	// cliente

	app.post('/insere/cliente', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_cliente (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});

	// carga
	app.post('/insere/carga', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_carga (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});


	// descarga

	app.post('/insere/descarga', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_descarga (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});

	// alimentacao

	app.post('/insere/alimentacao', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_alimentacao (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});


	// descanso
	app.post('/insere/descanso', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_descanso (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});


	// pernoite
	app.post('/insere/pernoite', function (req, res) {
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('insert into tb_pernoite (datainicio, horainicio, datafinal, horafinal) values (' + '\'' + req.body.dataInicio + '\'' + ','
	  																							+ '\'' + req.body.horaInicio + '\'' + ','
	  																							+ '\'' + req.body.dataFinal + '\'' + ','
	  																							+ '\'' + req.body.horaFinal + '\'' + ')', function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}

		res.setHeader('Access-Control-Allow-Origin','*');
		res.json(result.rows); // servidor retorna a consulta em formato json
	  });
	});
	});

app.listen(3000)
