import Sequelize, { Model } from 'sequelize'

class Servibilidade extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          field: 'descricao',
          type: Sequelize.STRING(50)
        },
        ativo: {
          field: 'ativo',
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      },
      {
        sequelize,
        tableName: 'servibilidade',
        modelName: 'servibilidade'
      }
    )

    // Hooks
    // exemplo
    // this.addHook('beforeSave', async usuario => {
    //   if (usuario.password) {
    //     usuario.password_hash = await bcrypt.hash(usuario.password, 8)
    //   }
    // })

    return this
  }

  // Associations
  // exemplo
  // static associate(models) {
  //   // Método de relacionamento (pertence a???)
  //   this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  // }

  // Methods
  // exemplo
  // checkPassword(password) {
  //   return bcrypt.compare(password, this.password_hash)
  // }

}

export default Servibilidade