export default function Home() {
  return (
    <div className="form-container">
      <form className="driver-form">
        <div className="form-row">
          <div className="form-group">
            <label>厂区 <span className="required">*</span></label>
            <select required>
              <option value="">请选择</option>
              <option value="factory1">厂区一</option>
              <option value="factory2">厂区二</option>
              <option value="factory3">厂区三</option>
            </select>
          </div>

          <div className="form-group">
            <label>进出地点 <span className="required">*</span></label>
            <select required>
              <option value="">请选择</option>
              <option value="gate1">正门</option>
              <option value="gate2">侧门</option>
              <option value="gate3">后门</option>
            </select>
          </div>

          <div className="form-group">
            <label>司机姓名 <span className="required">*</span></label>
            <input type="text" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>司机身份证号</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>司机电话 <span className="required">*</span></label>
            <input type="tel" required />
          </div>

          <div className="form-group">
            <label>车辆类型 <span className="required">*</span></label>
            <select required>
              <option value="">请选择</option>
              <option value="truck">货车</option>
              <option value="van">面包车</option>
              <option value="car">轿车</option>
              <option value="other">其他</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>特殊作业OA号</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>车牌 <span className="required">*</span></label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>进出日期 <span className="required">*</span></label>
            <input type="date" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>事由 <span className="required">*</span></label>
            <textarea required rows={4}></textarea>
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="submit-btn">提交</button>
        </div>
      </form>
    </div>
  );
}
