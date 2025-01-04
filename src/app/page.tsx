export default function Home() {
  return (
    <div className="form-container">
      <form className="driver-form">
        <div className="form-row">
          <div className="form-group">
            <label>Factory Area <span className="required">*</span></label>
            <select required>
              <option value="">Please Select</option>
              <option value="factory1">Factory 1</option>
              <option value="factory2">Factory 2</option>
              <option value="factory3">Factory 3</option>
            </select>
          </div>

          <div className="form-group">
            <label>Access Point <span className="required">*</span></label>
            <select required>
              <option value="">Please Select</option>
              <option value="gate1">Main Gate</option>
              <option value="gate2">Side Gate</option>
              <option value="gate3">Back Gate</option>
            </select>
          </div>

          <div className="form-group">
            <label>Driver Name <span className="required">*</span></label>
            <input type="text" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Driver ID</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Driver Phone <span className="required">*</span></label>
            <input type="tel" required />
          </div>

          <div className="form-group">
            <label>Vehicle Type <span className="required">*</span></label>
            <select required>
              <option value="">Please Select</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
              <option value="car">Car</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Special Operation OA No.</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>License Plate <span className="required">*</span></label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Access Date <span className="required">*</span></label>
            <input type="date" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Purpose <span className="required">*</span></label>
            <textarea required rows={4}></textarea>
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
