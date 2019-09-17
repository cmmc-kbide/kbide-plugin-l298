{
  module.exports = [
    {
      name: "Motor Drive L298",
      blocks: [
        {
          xml:
          `<block type="motordrive_l298_begin1">
            <value name="IN1">
              <block type="math_number">
                <field name="NUM">18</field>
              </block>
            </value>
            <value name="IN2">
              <block type="math_number">
                <field name="NUM">19</field>
              </block>
            </value>
            <value name="IN3">
              <block type="math_number">
                <field name="NUM">26</field>
              </block>
            </value>
            <value name="IN4">
              <block type="math_number">
                <field name="NUM">27</field>
              </block>
            </value>
          </block>`
        },
        // {
        //   xml:
        //   `<block type="motordrive_l298_begin2">
        //     <value name="ENA">
        //       <block type="math_number">
        //         <field name="NUM">22</field>
        //       </block>
        //     </value>
        //     <value name="ENB">
        //       <block type="math_number">
        //         <field name="NUM">21</field>
        //       </block>
        //     </value>
        //     <value name="IN1">
        //       <block type="math_number">
        //         <field name="NUM">18</field>
        //       </block>
        //     </value>
        //     <value name="IN2">
        //       <block type="math_number">
        //         <field name="NUM">19</field>
        //       </block>
        //     </value>
        //     <value name="IN3">
        //       <block type="math_number">
        //         <field name="NUM">26</field>
        //       </block>
        //     </value>
        //     <value name="IN4">
        //       <block type="math_number">
        //         <field name="NUM">27</field>
        //       </block>
        //     </value>
        //   </block>`
        // },
        'motordrive_l298_forward',
        'motordrive_l298_backward',
        'motordrive_l298_turn',
        'motordrive_l298_stop'
      ]
    }
  ];
}
